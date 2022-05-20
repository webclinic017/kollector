(function() {var implementors = {};
implementors["common"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"common/enum.ErrorKind.html\" title=\"enum common::ErrorKind\">ErrorKind</a>","synthetic":true,"types":["common::http::ErrorKind"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.Error.html\" title=\"struct common::Error\">Error</a>","synthetic":true,"types":["common::http::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.HttpClient.html\" title=\"struct common::HttpClient\">HttpClient</a>","synthetic":true,"types":["common::http::HttpClient"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"common/enum.Side.html\" title=\"enum common::Side\">Side</a>","synthetic":true,"types":["common::orders::Side"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.L2.html\" title=\"struct common::L2\">L2</a>","synthetic":true,"types":["common::orders::L2"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.InconsistentBook.html\" title=\"struct common::InconsistentBook\">InconsistentBook</a>","synthetic":true,"types":["common::orders::InconsistentBook"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.Book.html\" title=\"struct common::Book\">Book</a>","synthetic":true,"types":["common::orders::Book"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.L2Iterator.html\" title=\"struct common::L2Iterator\">L2Iterator</a>&lt;'a&gt;","synthetic":true,"types":["common::orders::L2Iterator"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.Context.html\" title=\"struct common::Context\">Context</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["common::worker::Context"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.WsInfo.html\" title=\"struct common::WsInfo\">WsInfo</a>","synthetic":true,"types":["common::worker::WsInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.WsPayload.html\" title=\"struct common::WsPayload\">WsPayload</a>","synthetic":true,"types":["common::worker::WsPayload"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.BookSnapshot.html\" title=\"struct common::BookSnapshot\">BookSnapshot</a>","synthetic":true,"types":["common::worker::BookSnapshot"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"common/enum.InnerMessage.html\" title=\"enum common::InnerMessage\">InnerMessage</a>","synthetic":true,"types":["common::worker::InnerMessage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"common/struct.WsConsumer.html\" title=\"struct common::WsConsumer\">WsConsumer</a>","synthetic":true,"types":["common::ws::WsConsumer"]}];
implementors["gateways"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"gateways/struct.Binance.html\" title=\"struct gateways::Binance\">Binance</a>","synthetic":true,"types":["gateways::binance::gateway::Binance"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"gateways/struct.Bitstamp.html\" title=\"struct gateways::Bitstamp\">Bitstamp</a>","synthetic":true,"types":["gateways::bitstamp::gateway::Bitstamp"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"gateways/enum.WsUpdate.html\" title=\"enum gateways::WsUpdate\">WsUpdate</a>","synthetic":true,"types":["gateways::gateway::WsUpdate"]}];
implementors["service"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"service/orderbook/orderbook_aggregator_client/struct.OrderbookAggregatorClient.html\" title=\"struct service::orderbook::orderbook_aggregator_client::OrderbookAggregatorClient\">OrderbookAggregatorClient</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["service::grpc::orderbook::orderbook_aggregator_client::OrderbookAggregatorClient"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"service/orderbook/orderbook_aggregator_server/struct.OrderbookAggregatorServer.html\" title=\"struct service::orderbook::orderbook_aggregator_server::OrderbookAggregatorServer\">OrderbookAggregatorServer</a>&lt;T&gt;","synthetic":true,"types":["service::grpc::orderbook::orderbook_aggregator_server::OrderbookAggregatorServer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"service/orderbook/struct.BookRequest.html\" title=\"struct service::orderbook::BookRequest\">BookRequest</a>","synthetic":true,"types":["service::grpc::orderbook::BookRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"service/orderbook/struct.Summary.html\" title=\"struct service::orderbook::Summary\">Summary</a>","synthetic":true,"types":["service::grpc::orderbook::Summary"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"service/orderbook/struct.Level.html\" title=\"struct service::orderbook::Level\">Level</a>","synthetic":true,"types":["service::grpc::orderbook::Level"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"service/struct.OrderbookAggregator.html\" title=\"struct service::OrderbookAggregator\">OrderbookAggregator</a>","synthetic":true,"types":["service::grpc::OrderbookAggregator"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"service/struct.Kollector.html\" title=\"struct service::Kollector\">Kollector</a>","synthetic":true,"types":["service::kollector::Kollector"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()