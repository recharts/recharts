import{R as e}from"./iframe-DmqRNFpA.js";import{A as a}from"./AreaChart-BqvF5CQf.js";import{R as r}from"./zIndexSlice-B1K-Cx6E.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-DFOC2XEP.js";import{X as i}from"./XAxis-D3OnHsd5.js";import{Y as m}from"./YAxis-BVwyU1u1.js";import{A as s}from"./Area-mZI1aImN.js";import{T as p}from"./Tooltip-D2Z3majm.js";import{L as f}from"./LineChart-DO_npS7k.js";import{L as x}from"./Line-gXpEv3sk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTNqlU94.js";import"./resolveDefaultProps-BjqyIxlF.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CgQoXC7y.js";import"./throttle-DniwHdPI.js";import"./index-DLLiFttT.js";import"./index-DKIkITg9.js";import"./polarAxisSelectors-DfZjHeTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-a0YrBx9c.js";import"./index-DugFJa8I.js";import"./index-D2BlTs7T.js";import"./renderedTicksSlice-rJsNFgC5.js";import"./index-7-eYjlBn.js";import"./fillDefinitions-D0KLDOLI.js";import"./CartesianChart-DvjgB_s_.js";import"./chartDataContext-7iFWy2pv.js";import"./CategoricalChart-BK3tVtDO.js";import"./CartesianAxis-B7FOD29F.js";import"./Layer-BMG2yPM5.js";import"./Text-CUDSRJfa.js";import"./ZIndexLayer-Rp2F5wBf.js";import"./Label-CGOHFUUI.js";import"./types-ClR1fgnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-GdhkPv0Q.js";import"./dataEntryStyles-ClWs31k0.js";import"./ActivePoints-G7jUCSXZ.js";import"./Dot-BXNT0rJn.js";import"./activeStyles-2GMTQ11y.js";import"./useAnimationId-BfPOVraS.js";import"./Symbols-DJo18KTa.js";import"./symbol-BhHhN8K0.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-B1qkE8Ui.js";import"./ActiveShapeUtils-wD2P373B.js";import"./Curve-DXM7d3l8.js";import"./step-KG3W8n3J.js";import"./useEffectiveDataKey-1IVWV8C0.js";import"./useElementOffset-CeDnXL_W.js";import"./uniqBy-DGhKd4sh.js";import"./iteratee-CQuB2rq_.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DCqromoO.js";import"./Rectangle-D2jF24kk.js";import"./util-Dxo8gN5i.js";import"./Sector-C6utI8br.js";import"./ErrorBarContext-BaRUKqrY.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <>
        <p>Resize the window to test ResponsiveContainer</p>
        <div className="flex-parent">
          <ResponsiveContainer width="100%" className="flex-child">
            <AreaChart data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
          <ResponsiveContainer className="flex-child">
            <LineChart data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="amt" stroke="orange" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </>;
  },
  args: {}
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,u,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    }, {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    }, {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    }, {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    }, {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    }, {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    }, {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }];
    return <div style={{
      height: '100%',
      width: '100%',
      margin: 0
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '200px'
      }}>
          <div style={{
          flex: 1
        }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{
          flex: 1
        }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>;
  }
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};export{t as MultiChartFlexbox,n as ResponsiveContainerWithFlexbox,be as __namedExportsOrder,Pe as default};
