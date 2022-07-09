import { faChevronRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import Select from "react-select";
import './product.css'

class Product extends Component {
  constructor(props) {
    super(props);

    this.options = [
      { value: 'long-short', label: 'Long/Short', optionInfo: "Includes but not limited to long/short, market neutral, and relative value strategies."},
      { value: 'long', label: 'Long Only', optionInfo: "Includes but not limited to long only and index tracking/tactical allocation strategies." },
      { value: 'high-turnover', label: 'High Turnover', optionInfo: "Includes but not limited to frequent trading and quantitative strategies." },
      { value: 'risk-management', label: 'Risk Management', optionInfo: "Includes but not limited to equity risk management strategies." },
      { value: 'research', label: 'Research', optionInfo: "Includes but not limited to newsletters, and sell-side equity research providers." }
    ]

    this.optionDescription = {
      'long-short': {
        'intraday': 'Marks assist with equity buy or sell decisions intraday.',
        'intraweek': 'Marks assist with equity buy or sell decisions over a week duration.',
        'intramonth': 'Marks assist with equity buy or sell decisions over a month duration.'
      },
      'long': {
        'intraday': 'Marks assist with equity buy or sell decisions intraday.',
        'intraweek': 'Marks assist with equity buy or sell decisions over a week duration.',
        'intramonth': 'Marks assist with equity buy or sell decisions over a month duration.'
      },
      'high-turnover': {
        'intraday': 'Marks assist with equity buy or sell decisions intraday.',
        'intraweek': 'Marks assist with equity buy or sell decisions over a week duration.',
        'intramonth': 'Marks assist with equity buy or sell decisions over a month duration.'
      },
      'risk-management': {
        'intraday': 'Marks assist with intraday equity risk management.',
        'intraweek': 'Marks assist with intraweek equity risk management.',
        'intramonth': 'Marks assist with intramonth equity risk management.'
      },
      'research': {
        'intraday': 'Marks assist with equity buy or sell recommendations.',
        'intraweek': 'Marks assist with equity buy or sell recommendations.',
        'intramonth': 'Marks assist with equity buy or sell recommendations.'
      }
    }

    this.optionDetails = {
      'long-short': {
        'intraday': [
          {
            'useCase': 'Improve price discovery',
            'example':
              'Trader at an equity asset management firm is tasked to execute buy orders for ticker: ZVZZT, ' +
              ' a small-cap company with less than $10M in average daily trading volume value in the last 30 days. ' +
              'Trader wants to execute buy orders at the best possible price. <br/><br/> ' +
              'To supplement scale-in decisions, Trader orders an intraday buy Mark for ZVZZT. In ' +
              'normal course of scaling-into the position during the market day, Trader receives an ' +
              'intraday buy Mark for ZVZZT at $100.00. Trader decides to scale-in more ' +
              'aggressively by placing limit orders for higher volumes at or below the Mark price. ' +
              'Intraday Marks last for several minutes on average.<br/><br/> By market close, ' +
              'Trader realizes an average buy fill price for ZVZZT that is better ' +
              '(lower) than VWAP, and reduced transaction costs by consolidating orders around ' +
              'the Mark price. Absent ordering an intraday buy Mark for ZVZZT, Trader may have ' +
              'executed buy orders closer to VWAP and forgone a more optimized average buy fill ' +
              'price. Intraday buy Marks for a given symbol occur in about 71 trading days in the ' +
              'year; absent a Mark delivery, Trader may have executed buy orders closer to VWAP ' +
              'as part of normal course of business. Trader can cancel the Mark order if scale-in is ' +
              'complete prior to Mark delivery.',
          }
        ],
        'intraweek': [
          {
            'useCase': 'Compliment stop-limit rules',
            'example':
              'Portfolio Manager at an equity asset management firm decides to buy shares of ' +
              'ticker: ZVZZT, a large-cap company. Portfolio Manager wants to manage downside ' +
              'risk. <br/><br/>' +
              'To supplement stop-limit rules, Portfolio Manager orders an intraweek sell Mark for ' +
              'ZVZZT. Portfolio Manager sets an initial stop-limit to sell ZVZZT at $90.00, 10% ' +
              'below the average purchase price; during the week, Portfolio Manager receives an ' +
              'intraweek sell Mark in real-time for ZVZZT at $96.00. Portfolio Manager decides to ' +
              'adjust the stop-limit to $95.00, 5% below the average purchase price. Intraweek ' +
              'Marks last several market hours on average.<br/><br/>' +
              'By end of week, Portfolio Manager has exited the position because the stop-limit to ' +
              'sell ZVZZT was triggered at $95.00, 3% better (higher) than the end of week trading ' +
              'price. Absent ordering an intraweek sell Mark for ZVZZT, Portfolio Manager may ' +
              'have not adjusted the stop-limit and may have realized a larger loss on ZVZZT. ' +
              'Intraweek sell Marks for a given symbol occur in about 9 of the 52 weeks in the ' +
              'year; absent a Mark delivery, Portfolio Manager may have relied on the initial stop- ' +
              'limit as part of normal course of business. Portfolio Manager can cancel the Mark ' +
              'order if there is a change in the stop-limit policy prior to Mark delivery.',
          },
          {
            'useCase': 'Time position rebalances and/or tactical shifts',
            'example': 
              'Portfolio Manager at an equity asset management firm initiates a long position in ' +
              'several mid-cap companies in one sector. Portfolio Manager wants to hedge sector ' +
              'risk; therefore, also initiates a short position on ZVZZT, the sector ETF. <br/><br/>' +
              'To supplement hedge rebalancing decisions, Portfolio Manager orders rolling ' +
              'intraweek buy/sell (buy or sell) Marks for ZVZZT. In normal course of making hedge ' +
              'adjustments during the week, Portfolio Manager receives an intraweek sell Mark in ' +
              'real-time for ZVZZT at $100.00. For the remainder of the week, Portfolio Manager ' +
              'decides to:  <br/>' +
              '&gt; add to ZVZZT short value at or above the Mark price; and <br/>' +
              '&gt; refrain from ZVZZT adjustments below the Mark price. <br/>' +
              'Intraweek Marks last several market hours on average. <br/><br/>' +
              'By end of week, Portfolio Manager realizes a more optimized hedge ratio, and ' +
              'reduced transaction costs by consolidating adjustments around the Mark price. ' +
              'Absent ordering an intraweek buy/sell (buy or sell) Mark for ZVZZT, Portfolio ' +
              'Manager may have not improved parameters for hedge adjustments; thus, may ' +
              'have realized a less optimal hedge ratio. Intraweek buy/sell (buy and sell) Marks for ' +
              'a given symbol occur in about 27 of the 52 weeks in the year; absent a Mark ' +
              'delivery, Portfolio Manager may have followed the standard hedge adjustment ' +
              'program as part of normal course of business. Portfolio Manager can cancel the ' +
              'Mark order if hedge adjustments are complete prior to Mark delivery.',
          },
          {
            'useCase': 'Supplement momentum indications',
            'example': 
              'Portfolio Manager at an equity asset management firm monitors a basket of ' +
              'equities for momentum trade opportunities, including ticker: ZVZZT, a mid-cap ' +
              'company. Portfolio Manager wants to optimize timing of trades to maximize odds ' +
              'for gains.<br/><br/>' +
              'To supplement momentum indications, Portfolio Manager orders intraweek buy/sell ' +
              '(buy or sell) Marks for 3-5 candidates, including ZVZZT. In normal course of analysis ' +
              'during the week, Portfolio Manager receives an intraweek buy Mark in real-time for ' +
              'ZVZZT at $100.00. Portfolio Manager decides to execute buy orders for ZVZZT at or ' +
              'below the Mark price. Intraweek Marks last several market hours on average.<br/><br/>' +
              'By end of week, Portfolio Manager has a paper gain on ZVZZT. Absent ordering an ' +
              'intraweek buy/sell (buy or sell) Mark for ZVZZT, Portfolio Manager may have not ' +
              'improved parameters for momentum trades; thus, may have not executed a trade ' +
              'in ZVZZT. Intraweek buy/sell (buy or sell) Marks for a given symbol occur in about 27 ' +
              'of the 52 of weeks in the year; absent a Mark delivery, Portfolio Manager may have ' +
              'followed the standard momentum trade program as part of normal course of ' +
              'business. Portfolio Manager can cancel the Mark order if momentum trade is ' +
              'executed prior to Mark delivery.',
          }
        ],
        'intramonth': [
          {
            'useCase': 'Time covered call writes',
            'example':
              'Portfolio Manager at an equity asset management firm decides to generate ' +
              'premium income by writing covered calls on names in the portfolio, including ticker: ' +
              'ZVZZT, a large-cap company. Portfolio Manager wants to optimize timing of call ' +
              'writes to maximize premium income. <br/><br/>' +
              'To supplement call write timing decisions, Portfolio Manager orders intramonth sell ' +
              'Marks for 3-5 candidates, including ZVZZT. In normal course of analysis during the ' +
              'month, Portfolio Manager receives an intramonth sell Mark in real-time for ZVZZT at ' +
              '$100.00. Portfolio Manager decides to write covered calls on ZVZZT at a strike above ' +
              'the Mark price (OTM); calls expire within the month. Intramonth Marks last several ' +
              'market hours on average. <br/><br/>' +
              'By end of month, Portfolio Manager realizes call premium income. Absent ordering ' +
              'an intramonth sell Mark for ZVZZT, Portfolio Manager may have not executed ' +
              'covered call writes on ZVZZT or may have executed covered call writes at a less ' +
              'optimal strike, increasing the odds that ZVZZT would be called away. Intramonth sell ' +
              'Marks for a given symbol occur in about 1 of the 12 months in the year; absent a ' +
              'Mark delivery, Portfolio Manager may have followed the standard covered call write ' +
              'program as part of normal course of business. Portfolio Manager can cancel the ' +
              'Mark order if covered call write is executed prior to Mark delivery.',
          },
          {
            'useCase': 'Identify support and resistance levels to pre-empt trend reversals',
            'example':
              'Portfolio Manager at an equity asset management firm believes the market is due ' +
              'for a correction and decides to formalize a plan to mitigate this risk. Portfolio ' +
              'Manager wants to optimize timing of portfolio adjustments. <br/><br/>' +
              'To supplement portfolio adjustment decisions, Portfolio Manager orders an ' +
              'intramonth sell Mark for ZVZZT, an ETF that tracks a broad market index. In normal ' +
              'course of market analysis during the month, Portfolio Manager receives an ' +
              'intramonth sell Mark in real-time for ZVZZT at $100.00. Portfolio Manager decides ' +
              'to execute the full plan to mitigate market risk. Intramonth Marks last 1-2 trading ' +
              'days on average. <br/><br/>' +
              'By end of month, Portfolio Manager has protected the portfolio from loss. Absent ' +
              'ordering an intramonth sell Mark for ZVZZT, Portfolio Manager may have not ' +
              'implemented the full plan; thus, portfolio may have had greater market risk ' +
              'exposure. Intramonth sell Marks for a given symbol occur in about 1 of the 12 ' +
              'months in the year; absent a Mark delivery, Portfolio Manager may have followed ' +
              'the standard plan as part of normal course of business. Portfolio Manager can ' +
              'cancel the Mark order if plan is fully executed prior to Mark delivery.',
          },
        ]
      },
      'long': {
        'intraday': [
          {
            'useCase': 'Improve price discovery',
            'example':
              'Trader at an equity asset management firm is tasked to execute buy orders for ticker: ZVZZT, ' +
              ' a small-cap company with less than $10M in average daily trading volume value in the last 30 days. ' +
              'Trader wants to execute buy orders at the best possible price. <br/><br/> ' +
              'To supplement scale-in decisions, Trader orders an intraday buy Mark for ZVZZT. In ' +
              'normal course of scaling-into the position during the market day, Trader receives an ' +
              'intraday buy Mark for ZVZZT at $100.00. Trader decides to scale-in more ' +
              'aggressively by placing limit orders for higher volumes at or below the Mark price. ' +
              'Intraday Marks last for several minutes on average.<br/><br/> By market close, ' +
              'Trader realizes an average buy fill price for ZVZZT that is better ' +
              '(lower) than VWAP, and reduced transaction costs by consolidating orders around ' +
              'the Mark price. Absent ordering an intraday buy Mark for ZVZZT, Trader may have ' +
              'executed buy orders closer to VWAP and forgone a more optimized average buy fill ' +
              'price. Intraday buy Marks for a given symbol occur in about 71 trading days in the ' +
              'year; absent a Mark delivery, Trader may have executed buy orders closer to VWAP ' +
              'as part of normal course of business. Trader can cancel the Mark order if scale-in is ' +
              'complete prior to Mark delivery.',
          }
        ],
        'intraweek': [
          {
            'useCase': 'Compliment stop-limit rules',
            'example':
              'Portfolio Manager at an equity asset management firm decides to buy shares of ' +
              'ticker: ZVZZT, a large-cap company. Portfolio Manager wants to manage downside ' +
              'risk. <br/><br/>' +
              'To supplement stop-limit rules, Portfolio Manager orders an intraweek sell Mark for ' +
              'ZVZZT. Portfolio Manager sets an initial stop-limit to sell ZVZZT at $90.00, 10% ' +
              'below the average purchase price; during the week, Portfolio Manager receives an ' +
              'intraweek sell Mark in real-time for ZVZZT at $96.00. Portfolio Manager decides to ' +
              'adjust the stop-limit to $95.00, 5% below the average purchase price. Intraweek ' +
              'Marks last several market hours on average.<br/><br/>' +
              'By end of week, Portfolio Manager has exited the position because the stop-limit to ' +
              'sell ZVZZT was triggered at $95.00, 3% better (higher) than the end of week trading ' +
              'price. Absent ordering an intraweek sell Mark for ZVZZT, Portfolio Manager may ' +
              'have not adjusted the stop-limit and may have realized a larger loss on ZVZZT. ' +
              'Intraweek sell Marks for a given symbol occur in about 9 of the 52 weeks in the ' +
              'year; absent a Mark delivery, Portfolio Manager may have relied on the initial stop- ' +
              'limit as part of normal course of business. Portfolio Manager can cancel the Mark ' +
              'order if there is a change in the stop-limit policy prior to Mark delivery.',
          },
          {
            'useCase': 'Time position rebalances and/or tactical shifts',
            'example':
              'Portfolio Manager at an equity asset management firm monitors the underlying ' +
              'equity components of an index, including ticker: ZVZZT, a large-cap company. ' +
              'Portfolio Manager wants to time tactical shifts as part of an enhanced index tracking ' +
              'strategy. <br/><br/>' +
              'To supplement tactical shift decisions, Portfolio Manager orders rolling intraweek ' +
              'buy/sell (buy or sell) Marks for 3-5 names, including ZVZZT. In normal course of ' +
              'analysis during the week, Portfolio Manager receives an intraweek sell Mark in real- ' +
              'time for ZVZZT at $100.00. For the remainder of the week, Portfolio Manager ' +
              'decides to trim exposure to ZVZZT at or above the Mark price. Intraweek Marks last ' +
              'several market hours on average. <br/><br/>' +
              'By end of week, Portfolio Manager realizes a more optimal weighting for ZVZZT ' +
              'relative to the index, and reduced transaction costs by consolidating adjustments ' +
              'around the Mark price. Absent ordering an intraweek buy/sell (buy or sell) Mark for ' +
              'ZVZZT, Portfolio Manager may have not improved parameters for tactical shifts; ' +
              'thus, may have realized a less optimal weighting for ZVZZT. Intraweek buy/sell (buy ' +
              'and sell) Marks for a given symbol occur in about 27 of the 52 weeks in the year; ' +
              'absent a Mark delivery, Portfolio Manager may have followed the standard tactical ' +
              'shift program as part of normal course of business. Portfolio Manager can cancel the ' +
              'Mark order if tactical shift is complete prior to Mark delivery.',
          },
          {
            'useCase': 'Supplement momentum indications',
            'example': 
              'Portfolio Manager at an equity asset management firm monitors a basket of ' +
              'equities for momentum trade opportunities, including ticker: ZVZZT, a mid-cap ' +
              'company. Portfolio Manager wants to optimize timing of trades to maximize odds ' +
              'for gains. <br/><br/>' +
              'To supplement momentum indications, Portfolio Manager orders intraweek buy ' +
              'Marks for 3-5 candidates, including ZVZZT. In normal course of analysis during the ' +
              'week, Portfolio Manager receives an intraweek buy Mark in real-time for ZVZZT at ' +
              '$100.00. Portfolio Manager decides to execute buy orders for ZVZZT at or below the ' +
              'Mark price. Intraweek Marks last several market hours on average. <br/><br/>' +
              'By end of week, Portfolio Manager has a paper gain on ZVZZT. Absent ordering an ' +
              'intraweek buy Mark for ZVZZT, Portfolio Manager may have not improved ' +
              'parameters for momentum trades; thus, may have not executed a trade in ZVZZT. ' +
              'Intraweek buy Marks for a given symbol occur in about 18 of the 52 weeks in the ' +
              'year; absent a Mark delivery, Portfolio Manager may have followed the standard ' +
              'momentum trade program as part of normal course of business. Portfolio Manager ' +
              'can cancel the Mark order if momentum trade is executed prior to Mark delivery.',
          },
        ],
        'intramonth': [
          {
            'useCase': 'Time covered call writes',
            'example':
              'Portfolio Manager at an equity asset management firm decides to generate ' +
              'premium income by writing covered calls on names in the portfolio, including ticker: ' +
              'ZVZZT, a large-cap company. Portfolio Manager wants to optimize timing of call ' +
              'writes to maximize premium income. <br/><br/>' +
              'To supplement call write timing decisions, Portfolio Manager orders intramonth sell ' +
              'Marks for 3-5 candidates, including ZVZZT. In normal course of analysis during the ' +
              'month, Portfolio Manager receives an intramonth sell Mark in real-time for ZVZZT at ' +
              '$100.00. Portfolio Manager decides to write covered calls on ZVZZT at a strike above ' +
              'the Mark price (OTM); calls expire within the month. Intramonth Marks last several ' +
              'market hours on average. <br/><br/>' +
              'By end of month, Portfolio Manager realizes call premium income. Absent ordering ' +
              'an intramonth sell Mark for ZVZZT, Portfolio Manager may have not executed ' +
              'covered call writes on ZVZZT or may have executed covered call writes at a less ' +
              'optimal strike, increasing the odds that ZVZZT would be called away. Intramonth sell ' +
              'Marks for a given symbol occur in about 1 of the 12 months in the year; absent a ' +
              'Mark delivery, Portfolio Manager may have followed the standard covered call write ' +
              'program as part of normal course of business. Portfolio Manager can cancel the ' +
              'Mark order if covered call write is executed prior to Mark delivery.',
          },
          {
            'useCase': 'Identify support and resistance levels to pre-empt trend reversals',
            'example':
              'Portfolio Manager at an equity asset management firm believes the market is due ' +
              'for a correction and decides to formalize a plan to mitigate this risk. Portfolio ' +
              'Manager wants to optimize timing of portfolio adjustments. <br/><br/>' +
              'To supplement portfolio adjustment decisions, Portfolio Manager orders an ' +
              'intramonth sell Mark for ZVZZT, an ETF that tracks a broad market index. In normal ' +
              'course of market analysis during the month, Portfolio Manager receives an ' +
              'intramonth sell Mark in real-time for ZVZZT at $100.00. Portfolio Manager decides ' +
              'to execute the full plan to mitigate market risk. Intramonth Marks last 1-2 trading ' +
              'days on average. <br/><br/>' +
              'By end of month, Portfolio Manager has protected the portfolio from loss. Absent ' +
              'ordering an intramonth sell Mark for ZVZZT, Portfolio Manager may have not ' +
              'implemented the full plan; thus, portfolio may have had greater market risk ' +
              'exposure. Intramonth sell Marks for a given symbol occur in about 1 of the 12 ' +
              'months in the year; absent a Mark delivery, Portfolio Manager may have followed ' +
              'the standard plan as part of normal course of business. Portfolio Manager can ' +
              'cancel the Mark order if plan is fully executed prior to Mark delivery.',
          },
        ]
      },
      'high-turnover': {
        'intraday': [
          {
            'useCase': 'Improve price discovery',
            'example':
              'Trader at an equity asset management firm is tasked to execute buy orders for ticker: ZVZZT, ' +
              ' a small-cap company with less than $10M in average daily trading volume value in the last 30 days. ' +
              'Trader wants to execute buy orders at the best possible price. <br/><br/> ' +
              'To supplement scale-in decisions, Trader orders an intraday buy Mark for ZVZZT. In ' +
              'normal course of scaling-into the position during the market day, Trader receives an ' +
              'intraday buy Mark for ZVZZT at $100.00. Trader decides to scale-in more ' +
              'aggressively by placing limit orders for higher volumes at or below the Mark price. ' +
              'Intraday Marks last for several minutes on average.<br/><br/> By market close, ' +
              'Trader realizes an average buy fill price for ZVZZT that is better ' +
              '(lower) than VWAP, and reduced transaction costs by consolidating orders around ' +
              'the Mark price. Absent ordering an intraday buy Mark for ZVZZT, Trader may have ' +
              'executed buy orders closer to VWAP and forgone a more optimized average buy fill ' +
              'price. Intraday buy Marks for a given symbol occur in about 71 trading days in the ' +
              'year; absent a Mark delivery, Trader may have executed buy orders closer to VWAP ' +
              'as part of normal course of business. Trader can cancel the Mark order if scale-in is ' +
              'complete prior to Mark delivery.',
          },
          {
            'useCase': 'Supplement day trading indications',
            'example':
              'Prop Trader at a boutique trading firm monitors a basket of equities for day trade ' +
              'opportunities, including ticker: ZVZZT, a mid-cap company. Prop Trader wants to ' +
              'optimize timing of trades to maximize odds for gains. <br/><br/>' +
              'To supplement day trading indications, Prop Trader orders intraday buy/sell (buy or ' +
              'sell) Marks for 3-5 candidates, including ZVZZT. Prop Trader sets an initial intraday ' +
              'lower-limit and upper-limit to buy or sell/short ZVZZT at $98.00 and $102.00, ' +
              'respectively; during the trading day, Prop Trader receives an intraday sell Mark in ' +
              'real-time for ZVZZT at $101.00, lower than the initial upper-limit price. Prop Trader ' +
              'decides to execute sell orders for ZVZZT at or above the Mark price. Intraday Marks ' +
              'last several minutes on average. <br/><br/>' +
              'By market close, Prop Trader realizes a gain on ZVZZT. Absent ordering an intraday ' +
              'buy/sell (buy or sell) Mark for ZVZZT, Prop Trader may have not improved ' +
              'parameters for day trades; thus, may have not executed a trade in ZVZZT. Intraday ' +
              'buy/sell (buy or sell) Marks for a given symbol occur in about 107 of trading days in ' +
              'the year; absent a Mark delivery, Prop Trader may have followed the standard day ' +
              'trade program as part of normal course of business. Prop Trader can cancel the ' +
              'Mark order if day trade is executed prior to Mark delivery.',
          },
          {
            'useCase': 'Complement risk management for negative/positive selection portfolios',
            'example': 
              'Prop Trader at an investment bank monitors a basket of equities to manage ' +
              'negative selection risk, including ticker: ZVZZT, a mid-cap company. Negative ' +
              'selection positions result from processing customer business; however, the ' +
              'investment bank does not particularly have a view on those positions. Prop Trader ' +
              'wants to optimize timing of trades to maximize odds for gains. <br/><br/>' +
              'To supplement negative selection risk management indications, Prop Trader orders ' +
              'intraday buy/sell (buy or sell) Marks for 3-5 names, including ZVZZT. In normal ' +
              'course of analysis during the day, Prop Trader receives an intraday sell Mark in real- ' +
              'time for ZVZZT at $100.00. Prop Trader decides to execute sell orders for ZVZZT at or ' +
              'above the Mark price. Intraday Marks last several minutes on average. <br/><br/>' +
              'By market close, Prop Trader has realized a gain on ZVZZT. Absent ordering an ' +
              'intraday buy/sell (buy or sell) Mark for ZVZZT, Prop Trader may have not improved ' +
              'parameters for managing negative selection risk; thus, may have not executed sell ' +
              'orders for ZVZZT. Intraday buy/sell (buy or sell) Marks for a given symbol occur in ' +
              'about 107 of trading days in the year; absent a Mark delivery, Prop Trader may have ' +
              'followed the standard negative selection risk program as part of normal course of ' +
              'business. Prop Trader can cancel the Mark order if negative selection risk is resolved ' +
              'prior to Mark delivery.',
          },
        ],
        'intraweek': [
          {
            'useCase': 'Compliment stop-limit rules',
            'example':
              'Portfolio Manager at an equity asset management firm decides to buy shares of ' +
              'ticker: ZVZZT, a large-cap company. Portfolio Manager wants to manage downside ' +
              'risk. <br/><br/>' +
              'To supplement stop-limit rules, Portfolio Manager orders an intraweek sell Mark for ' +
              'ZVZZT. Portfolio Manager sets an initial stop-limit to sell ZVZZT at $90.00, 10% ' +
              'below the average purchase price; during the week, Portfolio Manager receives an ' +
              'intraweek sell Mark in real-time for ZVZZT at $96.00. Portfolio Manager decides to ' +
              'adjust the stop-limit to $95.00, 5% below the average purchase price. Intraweek ' +
              'Marks last several market hours on average.<br/><br/>' +
              'By end of week, Portfolio Manager has exited the position because the stop-limit to ' +
              'sell ZVZZT was triggered at $95.00, 3% better (higher) than the end of week trading ' +
              'price. Absent ordering an intraweek sell Mark for ZVZZT, Portfolio Manager may ' +
              'have not adjusted the stop-limit and may have realized a larger loss on ZVZZT. ' +
              'Intraweek sell Marks for a given symbol occur in about 9 of the 52 weeks in the ' +
              'year; absent a Mark delivery, Portfolio Manager may have relied on the initial stop- ' +
              'limit as part of normal course of business. Portfolio Manager can cancel the Mark ' +
              'order if there is a change in the stop-limit policy prior to Mark delivery.',
          },
          {
            'useCase': 'Time position rebalances and/or tactical shifts',
            'example':
              'Portfolio Manager at an equity asset management firm monitors the underlying ' +
              'equity components of an index, including ticker: ZVZZT, a large-cap company. ' +
              'Portfolio Manager wants to time tactical shifts as part of an enhanced index tracking ' +
              'strategy. <br/><br/>' +
              'To supplement tactical shift decisions, Portfolio Manager orders rolling intraweek ' +
              'buy/sell (buy or sell) Marks for 3-5 names, including ZVZZT. In normal course of ' +
              'analysis during the week, Portfolio Manager receives an intraweek sell Mark in real- ' +
              'time for ZVZZT at $100.00. For the remainder of the week, Portfolio Manager ' +
              'decides to trim exposure to ZVZZT at or above the Mark price. Intraweek Marks last ' +
              'several market hours on average. <br/><br/>' +
              'By end of week, Portfolio Manager realizes a more optimal weighting for ZVZZT ' +
              'relative to the index, and reduced transaction costs by consolidating adjustments ' +
              'around the Mark price. Absent ordering an intraweek buy/sell (buy or sell) Mark for ' +
              'ZVZZT, Portfolio Manager may have not improved parameters for tactical shifts; ' +
              'thus, may have realized a less optimal weighting for ZVZZT. Intraweek buy/sell (buy ' +
              'and sell) Marks for a given symbol occur in about 27 of the 52 weeks in the year; ' +
              'absent a Mark delivery, Portfolio Manager may have followed the standard tactical ' +
              'shift program as part of normal course of business. Portfolio Manager can cancel the ' +
              'Mark order if tactical shift is complete prior to Mark delivery.',
          },
          {
            'useCase': 'Supplement momentum indications',
            'example':
              'Portfolio Manager at an equity asset management firm monitors a basket of ' +
              'equities for momentum trade opportunities, including ticker: ZVZZT, a mid-cap ' +
              'company. Portfolio Manager wants to optimize timing of trades to maximize odds ' +
              'for gains. <br/><br/>' +
              'To supplement momentum indications, Portfolio Manager orders intraweek buy ' +
              'Marks for 3-5 candidates, including ZVZZT. In normal course of analysis during the ' +
              'week, Portfolio Manager receives an intraweek buy Mark in real-time for ZVZZT at ' +
              '$100.00. Portfolio Manager decides to execute buy orders for ZVZZT at or below the ' +
              'Mark price. Intraweek Marks last several market hours on average. <br/><br/>' +
              'By end of week, Portfolio Manager has a paper gain on ZVZZT. Absent ordering an ' +
              'intraweek buy Mark for ZVZZT, Portfolio Manager may have not improved ' +
              'parameters for momentum trades; thus, may have not executed a trade in ZVZZT. ' +
              'Intraweek buy Marks for a given symbol occur in about 18 of the 52 weeks in the ' +
              'year; absent a Mark delivery, Portfolio Manager may have followed the standard ' +
              'momentum trade program as part of normal course of business. Portfolio Manager ' +
              'can cancel the Mark order if momentum trade is executed prior to Mark delivery.',
          },
        ],
        'intramonth': [
          {
            'useCase': 'Time covered call writes',
            'example':
              'Portfolio Manager at an equity asset management firm decides to generate ' +
              'premium income by writing covered calls on names in the portfolio, including ticker: ' +
              'ZVZZT, a large-cap company. Portfolio Manager wants to optimize timing of call ' +
              'writes to maximize premium income. <br/><br/>' +
              'To supplement call write timing decisions, Portfolio Manager orders intramonth sell ' +
              'Marks for 3-5 candidates, including ZVZZT. In normal course of analysis during the ' +
              'month, Portfolio Manager receives an intramonth sell Mark in real-time for ZVZZT at ' +
              '$100.00. Portfolio Manager decides to write covered calls on ZVZZT at a strike above ' +
              'the Mark price (OTM); calls expire within the month. Intramonth Marks last several ' +
              'market hours on average. <br/><br/>' +
              'By end of month, Portfolio Manager realizes call premium income. Absent ordering ' +
              'an intramonth sell Mark for ZVZZT, Portfolio Manager may have not executed ' +
              'covered call writes on ZVZZT or may have executed covered call writes at a less ' +
              'optimal strike, increasing the odds that ZVZZT would be called away. Intramonth sell ' +
              'Marks for a given symbol occur in about 1 of the 12 months in the year; absent a ' +
              'Mark delivery, Portfolio Manager may have followed the standard covered call write ' +
              'program as part of normal course of business. Portfolio Manager can cancel the ' +
              'Mark order if covered call write is executed prior to Mark delivery.',
          },
          {
            'useCase': 'Identify support and resistance levels to pre-empt trend reversals',
            'example':
              'Portfolio Manager at an equity asset management firm believes the market is due ' +
              'for a correction and decides to formalize a plan to mitigate this risk. Portfolio ' +
              'Manager wants to optimize timing of portfolio adjustments. <br/><br/>' +
              'To supplement portfolio adjustment decisions, Portfolio Manager orders an ' +
              'intramonth sell Mark for ZVZZT, an ETF that tracks a broad market index. In normal ' +
              'course of market analysis during the month, Portfolio Manager receives an ' +
              'intramonth sell Mark in real-time for ZVZZT at $100.00. Portfolio Manager decides ' +
              'to execute the full plan to mitigate market risk. Intramonth Marks last 1-2 trading ' +
              'days on average. <br/><br/>' +
              'By end of month, Portfolio Manager has protected the portfolio from loss. Absent ' +
              'ordering an intramonth sell Mark for ZVZZT, Portfolio Manager may have not ' +
              'implemented the full plan; thus, portfolio may have had greater market risk ' +
              'exposure. Intramonth sell Marks for a given symbol occur in about 1 of the 12 ' +
              'months in the year; absent a Mark delivery, Portfolio Manager may have followed ' +
              'the standard plan as part of normal course of business. Portfolio Manager can ' +
              'cancel the Mark order if plan is fully executed prior to Mark delivery.',
          },
        ]
      },
      'risk-management': {
        'intraday': [
          {
            'useCase': 'Improve price discovery for less liquid equities',
            'example':
              'Trader at an equity asset management firm is tasked to sell/unwind a losing position ' +
              'in ticker: ZVZZT, a small-cap company with less than $10M in average daily trading ' +
              'volume value in the last 30 days. Trader wants to execute sell orders at the best ' +
              'possible price. <br/><br/>' +
              'To supplement scale-out decisions, Trader orders an intraday sell Mark for ZVZZT. In ' +
              'normal course of scaling-out of the position during the market day, Trader receives ' +
              'an intraday sell Mark for ZVZZT at $100.00. Trader decides to scale-out more ' +
              'aggressively by placing limit orders for higher volumes at or above the Mark price. ' +
              'Intraday Marks last for several minutes on average. <br/><br/>' +
              'By market close, Trader realizes an average sell fill price for ZVZZT that is better ' +
              '(higher) than VWAP, and reduced transaction costs by consolidating orders around ' +
              'the Mark price. Absent ordering an intraday sell Mark for ZVZZT, Trader may have ' +
              'executed sell orders closer to VWAP and forgone a more optimized average sell fill ' +
              'price. Intraday sell Marks for a given symbol occur in about 37 trading days in the ' +
              'year; absent a Mark delivery, Trader may have executed sell orders closer to VWAP ' +
              'as part of normal course of business. Trader can cancel the Mark order if exit is ' +
              'complete prior to Mark delivery.'
          }
        ],
        'intraweek': [
          {
            'useCase': 'Compliment stop-loss rules',
            'example':
              'Portfolio Manager at an equity asset management firm watch-lists a losing position ' +
              'in ticker: ZVZZT, a large-cap company. Portfolio Manager wants to manage ' +
              'downside risk. <br/><br/>' +
              'To supplement stop-loss rules, Portfolio Manager orders an intraweek sell Mark for ' +
              'ZVZZT. Portfolio Manager sets an initial stop-loss to sell ZVZZT at $90.00, 10% below ' +
              'the average purchase price; during the week, Portfolio Manager receives an ' +
              'intraweek sell Mark in real-time for ZVZZT at $96.00. Portfolio Manager decides to ' +
              'adjust the stop-loss to $95.00, 5% below the average purchase price. Intraweek ' +
              'Marks last several market hours on average. <br/><br/>' +
              'By end of week, Portfolio Manager has exited the position because the stop-loss to ' +
              'sell ZVZZT was triggered at $95.00, 3% better (higher) than the end of week trading ' +
              'price. Absent ordering an intraweek sell Mark for ZVZZT, Portfolio Manager may ' +
              'have not adjusted the stop-loss and may have realized a larger loss on ZVZZT. ' +
              'Intraweek sell Marks for a given symbol occur in about 9 of the 52 weeks in the ' +
              'year; absent a Mark delivery, Portfolio Manager may have relied on the initial stop- ' +
              'loss as part of normal course of business. Portfolio Manager can cancel the Mark ' +
              'order if there is a change in the stop-loss policy prior to Mark delivery.'
          },
          {
            'useCase': 'Time position rebalances and/or tactical shifts',
            'example':
              'Portfolio Manager at an equity asset management firm initiates a long position in ' +
              'several mid-cap companies in one sector. Portfolio Manager wants to hedge sector ' +
              'risk; therefore, also initiates a short position on ZVZZT, the sector ETF. <br/><br/>' +
              'To supplement hedge rebalancing decisions, Portfolio Manager orders rolling ' +
              'intraweek buy/sell (buy or sell) Marks for ZVZZT. In normal course of making hedge ' +
              'adjustments during the week, Portfolio Manager receives an intraweek sell Mark in ' +
              'real-time for ZVZZT at $100.00. For the remainder of the week, Portfolio Manager ' +
              'decides to: <br/>' +
              '&gt; add to ZVZZT short value at or above the Mark price; and <br/>' +
              '&gt; refrain from ZVZZT adjustments below the Mark price. <br/>' +
              'Intraweek Marks last several market hours on average. <br/><br/>' +
              'By end of week, Portfolio Manager realizes a more optimized hedge ratio, and ' +
              'reduced transaction costs by consolidating adjustments around the Mark price. ' +
              'Absent ordering an intraweek buy/sell (buy or sell) Mark for ZVZZT, Portfolio ' +
              'Manager may have not improved parameters for hedge adjustments; thus, may ' +
              'have realized a less optimal hedge ratio. Intraweek buy/sell (buy and sell) Marks for ' +
              'a given symbol occur in about 27 of the 52 weeks in the year; absent a Mark ' +
              'delivery, Portfolio Manager may have followed the standard hedge adjustment ' +
              'program as part of normal course of business. Portfolio Manager can cancel the ' +
              'Mark order if hedge adjustments are complete prior to Mark delivery.'
          },
        ],
        'intramonth': [
          {
            'useCase': 'Time protective put writes',
            'example':
              'Portfolio Manager at an equity asset management firm decides to manage ' +
              'downside risk by writing protective puts on names in the portfolio, including ticker: ' +
              'ZVZZT, a large-cap company. Portfolio Manager wants to optimize timing of put ' +
              'writes to minimize premium costs. <br/><br/>' +
              'To supplement put write timing decisions, Portfolio Manager orders intramonth sell ' +
              'Marks for 3-5 candidates, including ZVZZT. In normal course of analysis during the ' +
              'month, Portfolio Manager receives an intramonth sell Mark in real-time for ZVZZT at ' +
              '$100.00. Portfolio Manager decides to write puts on ZVZZT at a strike below the ' +
              'Mark price (OTM); puts expire within the month. Intramonth Marks last several ' +
              'market hours on average. <br/><br/>' +
              'By end of month, Portfolio Manager realizes lower premium costs. Absent ordering ' +
              'an intramonth sell Mark for ZVZZT, Portfolio Manager may have not executed ' +
              'protective put writes on ZVZZT or may have executed protective put writes at a less ' +
              'optimal strike. Intramonth sell Marks for a given symbol occur in about 1 of the 12 ' +
              'months in the year; absent a Mark delivery, Portfolio Manager may have followed ' +
              'the standard protective put write program as part of normal course of business. ' +
              'Portfolio Manager can cancel the Mark order if protective put write is executed ' +
              'prior to Mark delivery.'
          },
          {
            'useCase': 'Identify support and resistance levels to pre-empt trend reversals',
            'example':
              'Portfolio Manager at an equity asset management firm believes the market is due ' +
              'for a correction and decides to formalize a plan to mitigate this risk. Portfolio ' +
              'Manager wants to optimize timing of portfolio adjustments. <br/><br/>' +
              'To supplement portfolio adjustment decisions, Portfolio Manager orders an ' +
              'intramonth sell Mark for ZVZZT, an ETF that tracks a broad market index. In normal ' +
              'course of market analysis during the month, Portfolio Manager receives an ' +
              'intramonth sell Mark in real-time for ZVZZT at $100.00. Portfolio Manager decides ' +
              'to execute the full plan to mitigate market risk. Intramonth Marks last 1-2 trading ' +
              'days on average. <br/><br/>' +
              'By end of month, Portfolio Manager has protected the portfolio from loss. Absent ' +
              'ordering an intramonth sell Mark for ZVZZT, Portfolio Manager may have not ' +
              'implemented the full plan; thus, portfolio may have had greater market risk ' +
              'exposure. Intramonth sell Marks for a given symbol occur in about 1 of the 12 ' +
              'months in the year; absent a Mark delivery, Portfolio Manager may have followed ' +
              'the standard plan as part of normal course of business. Portfolio Manager can ' +
              'cancel the Mark order if plan is fully executed prior to Mark delivery.',
          },
          {
            'useCase': 'Supplement trading envelope indications',
            'example':
              'Portfolio Manager at an equity asset management firm decides to manage risk by ' +
              'establishing trading envelopes for names in the portfolio, including ticker: ZVZZT, a ' +
              'large-cap company. Portfolio Manager wants to optimize timing of profit/loss ' +
              'taking. <br/><br/>' +
              'To supplement trading envelope indications, Portfolio Manager orders intramonth ' +
              'buy/sell (buy or sell) Marks for 3-5 candidates, including ZVZZT. Portfolio Manager ' +
              'sets an initial intramonth lower-limit and upper-limit to buy or sell/short ZVZZT at ' +
              '$90.00 and $110.00, respectively; during the month, Portfolio Manager receives an ' +
              'intramonth sell Mark in real-time for ZVZZT at $105.00, lower than the initial upper- ' +
              'limit price. Portfolio Manager decides to execute sell orders for ZVZZT at or above ' +
              'the Mark price. Intraday Marks last several minutes on average. <br/><br/>' +
              'By market close, Portfolio Manager secures a gain on ZVZZT. Absent ordering an ' +
              'intramonth buy/sell (buy or sell) Mark for ZVZZT, Portfolio Manager may have not ' +
              'improved parameters for the trading envelope; thus, may have not exited ZVZZT. ' +
              'Intramonth buy/sell (buy or sell) Marks for a given symbol occur in about 4 of the 12 ' +
              'months in the year; absent a Mark delivery, Portfolio Manager may have followed ' +
              'the standard trading envelope program as part of normal course of business. ' +
              'Portfolio Manager can cancel the Mark order if there is a change in the trading ' +
              'envelope policy prior to Mark delivery.'
          },
        ]
      },
      'research': {
        'intraday': [
          {
            'useCase': 'Supplement day trading recommendations',
            'example':
              'Research Analyst at a newsletter firm monitors a basket of equities for day trade ' +
              'recommendations, including ticker: ZVZZT, a mid-cap company. Research Analyst ' +
              'wants to optimize timing of trade recommendations to maximize odds for implied ' +
              'gains. <br/><br/>' +
              'To supplement day trading recommendations, Research Analyst orders intraday ' +
              'buy/sell (buy or sell) Marks for 3-5 candidates, including ZVZZT. Research Analyst ' +
              'sets an initial intraday lower-limit and upper-limit to buy or sell/short ZVZZT at ' +
              '$98.00 and $102.00, respectively; during the trading day, Research Analyst receives ' +
              'an intraday sell Mark in real-time for ZVZZT at $101.00, lower than the initial upper- ' +
              'limit price. Research Analyst decides to prioritize and publish a sell recommendation ' +
              'for ZVZZT. Intraday Marks last several minutes on average. <br/><br/>' +
              'By market close, Research Analyst recommendation implies a gain on ZVZZT. Absent ' +
              'ordering an intraday buy/sell (buy or sell) Mark for ZVZZT, Research Analyst may ' +
              'have not improved parameters for day trading recommendations; thus, may have ' +
              'not prioritized publishing a recommendation on ZVZZT. Intraday buy/sell (buy or ' +
              'sell) Marks for a given symbol occur in about 107 of trading days in the year; absent ' +
              'a Mark delivery, Research Analyst may have followed the standard day trade ' +
              'research program as part of normal course of business. Research Analyst can cancel ' +
              'the Mark order if recommendation is published prior to Mark delivery.',
          }
        ],
        'intraweek': [
          {
            'useCase': 'Supplement momentum trade recommendations',
            'example':
              'Research Analyst at a newsletter firm monitors a basket of equities for momentum ' +
              'trade recommendations, including ticker: ZVZZT, a mid-cap company. Research ' +
              'Analyst wants to optimize timing of trade recommendations to maximize odds for ' +
              'implied gains. <br/><br/>' +
              'To supplement momentum indications, Research Analyst orders intraweek buy/sell ' +
              '(buy or sell) Marks for 3-5 candidates, including ZVZZT. In normal course of analysis ' +
              'during the week, Research Analyst receives an intraweek buy Mark in real-time for ' +
              'ZVZZT at $100.00. Research Analyst decides to prioritize and publish a buy ' +
              'recommendation for ZVZZT. Intraweek Marks last several market hours on average. <br/><br/>' +
              'By end of week, Research Analyst recommendation implies a gain on ZVZZT. Absent ' +
              'ordering an intraweek buy/sell (buy or sell) Mark for ZVZZT, Research Analyst may ' +
              'have not improved parameters for momentum recommendations; thus, may have ' +
              'not prioritized publishing a recommendation on ZVZZT. Intraweek buy/sell (buy or ' +
              'sell) Marks for a given symbol occur in about 27 of the 52 of weeks in the year; ' +
              'absent a Mark delivery, Research Analyst may have followed the standard ' +
              'momentum research program as part of normal course of business. Research ' +
              'Analyst can cancel the Mark order if recommendation is published prior to Mark ' +
              'delivery.',
          },
        ],
        'intramonth': [
          {
            'useCase': 'Supplement buy/sell recommendations',
            'example':
              'Research Analyst at a sell-side equity research firm monitors a basket of equities to ' +
              'make investment recommendations, including ticker: ZVZZT, a mid-cap company. ' +
              'Research Analyst wants to optimize timing of recommendations to maximize odds ' +
              'for implied gains. <br/><br/>' +
              'To supplement research, Research Analyst orders intramonth buy/sell (buy or sell) ' +
              'Marks for 3-5 candidates, including ZVZZT. In normal course of analysis during the ' +
              'month, Research Analyst receives an intramonth buy Mark in real-time for ZVZZT at ' +
              '$100.00. Research Analyst decides to prioritize and publish a buy recommendation ' +
              'for ZVZZT. Intramonth Marks last 1-2 trading days on average. <br/><br/>' +
              'By end of month, Research Analyst recommendation implies a gain on ZVZZT. ' +
              'Absent ordering an intramonth buy/sell (buy or sell) Mark for ZVZZT, Research ' +
              'Analyst may have not prioritized publishing a recommendation on ZVZZT; thus, may ' +
              'have not improved timing for the recommendation. Intramonth buy/sell (buy or ' +
              'sell) Marks for a given symbol occur in about 4 of the 12 months in the year; absent ' +
              'a Mark delivery, Research Analyst may have followed the standard research ' +
              'program as part of normal course of business. Research Analyst can cancel the Mark ' +
              'order if recommendation is published prior to Mark delivery.',
          },
          {
            'useCase': 'Identify support and resistance levels to pre-empt trend reversals',
            'example':
              'Research Analyst at a sell-side equity research firm believes that the market is due ' +
              'for a correction. Research Analyst wants to optimize timing of recommendations to ' +
              'maximize odds for implied gains. <br/><br/>' +
              'To supplement research, Research Analyst orders an intramonth sell Mark for ' +
              'ZVZZT, an ETF that tracks a broad market index. In normal course of analysis during ' +
              'the month, Research Analyst receives an intramonth sell Mark in real-time for ZVZZT ' +
              'at $100.00. Research Analyst decides to prioritize and publish all sell ' +
              'recommendations that are currently in draft. Intramonth Marks last 1-2 trading days ' +
              'on average. <br/><br/>' +
              'By end of month, Research Analyst recommendations imply a gain. Absent ordering ' +
              'an intramonth sell Mark for ZVZZT, Research Analyst may have not prioritized ' +
              'publishing sell recommendations; thus, may have not improved timing for sell ' +
              'recommendations. Intramonth sell Marks for a given symbol occur in about 1 of the ' +
              '12 months in the year; absent a Mark delivery, Research Analyst may have followed ' +
              'the standard research program as part of normal course of business. Research ' +
              'Analyst can cancel the Mark order if recommendations are published prior to Mark ' +
              'delivery.',
          },
        ]
      }
    }

    this.state = {
      show: false,
      selectedOption: this.options[0],
      selectedOptionDetail: this.optionDetails['long-short'],
      selectedOptionDescription: this.optionDescription['long-short'],
      selectedExample: this.optionDetails['long-short'].intraday
    }
  }

  handleOptionSelection = (selectedOption) => {
    this.setState({
      selectedOption,
      selectedOptionDetail: this.optionDetails[selectedOption.value],
      selectedOptionDescription: this.optionDescription[selectedOption.value]
    });
  };

  handleClose = () => {
    this.setState({show: false});
  }

  showModal = (detail) => {
    this.setState({show: true, selectedExample: detail});
  }

  render() {
    return (
      <section>
        <h2 className="products-heading">Product Use Cases</h2>
        <Row className="equity-selector">
          <Col sm={4}>
            <Form.Group>
              <div className={'text-left pb-2'}>Select your equity strategy</div>
              <Select
                options={this.options}
                value={this.state.selectedOption}
                onChange={this.handleOptionSelection}
              />
              <div className={'select-info'}>
                {this.state.selectedOption.optionInfo}
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row className={'mt-5'}>
          <Col sm={4} className={'pr-5'}>
            <h2>Intraday</h2>
            <Row>
              <Col sm={12} className={'text-left'}>
                {this.state.selectedOptionDescription.intraday}
              </Col>
            </Row>
            <Row className={'mt-5'}>
              <Col sm={8}>

              </Col>
              <Col sm={4}>
                Examples
              </Col>
            </Row>
            {this.state.selectedOptionDetail.intraday.map((detail, index) => (
              <Row key={index}>
                <Col sm={8} className={'product-list'}>
                  <Row>
                    <Col sm={12}>
                      <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'}/>
                      <span>{detail.useCase}</span>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4} className={'product-icon'}>
                  <FontAwesomeIcon
                    role={"button"}
                    onClick={() => this.showModal(detail)}
                    icon={faInfoCircle}
                  />
                </Col>
              </Row>
            ))}
          </Col>
          <Col sm={4} className={'product-type pl-5 pr-5'}>
            <h2>Intraweek</h2>
            <Row>
              <Col sm={12} className={'text-left'}>
                {this.state.selectedOptionDescription.intraweek}
              </Col>
            </Row>
            <Row className={'mt-5'}>
              <Col sm={8}>

              </Col>
              <Col sm={4}>
                Examples
              </Col>
            </Row>
            {this.state.selectedOptionDetail.intraweek.map((detail, index) => (
              <Row key={index}>
                <Col sm={8} className={'product-list'}>
                  <Row>
                    <Col sm={12}>
                      <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'}/>
                      <span>{detail.useCase}</span>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4} className={'product-icon'}>
                  <FontAwesomeIcon
                    role={"button"}
                    onClick={() => this.showModal(detail)}
                    icon={faInfoCircle}
                  />
                </Col>
              </Row>
            ))}
          </Col>
          <Col sm={4} className={'pl-5'}>
            <h2>Intramonth</h2>
            <Row>
              <Col sm={12} className={'text-left'}>
                {this.state.selectedOptionDescription.intramonth}
              </Col>
            </Row>
            <Row className={'mt-5'}>
              <Col sm={8}>

              </Col>
              <Col sm={4}>
                Examples
              </Col>
            </Row>
            {this.state.selectedOptionDetail.intramonth.map((detail, index) => (
              <Row key={index}>
                <Col sm={8} className={'product-list'}>
                  <Row>
                    <Col sm={12}>
                      <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'}/>
                      <span>{detail.useCase}</span>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4} className={'product-icon'}>
                  <FontAwesomeIcon
                    role={"button"}
                    onClick={() => this.showModal(detail)}
                    icon={faInfoCircle}
                  />
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
        <Modal show={this.state.show} onHide={this.handleClose} size={'xl'}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedExample.useCase}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div dangerouslySetInnerHTML={{__html: this.state.selectedExample.example}}/>
          </Modal.Body>
          <Modal.Footer>
            <div className={'example-disclosure'}>
              <div>
                <strong>Hypothetical Performance Disclosure:</strong> Examples are hypothetical and provided for illustrative purposes only. Examples are in context of equities traded on US
                exchanges. Hypothetical performance results have many inherent limitations, some of which are
                described below. No representation is being made that any account will or is likely to achieve profits
                or losses similar to those shown; in fact, there are frequently sharp differences between
                hypothetical performance results and the actual results subsequently achieved by any particular
                trading program. One of the limitations of hypothetical performance results is that they are
                generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve
                financial risk, and no hypothetical trading record can completely account for the impact of financial
                risk of actual trading. For example, the ability to withstand losses or to adhere to a particular
                trading program in spite of trading losses are material points which can also adversely affect actual
                trading results. There are numerous other factors related to the markets in general or to the
                implementation of any specific trading program which cannot be fully accounted for in the
                preparation of hypothetical performance results and all which can adversely affect trading results.
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </section>
    )
  }
}

export default Product
