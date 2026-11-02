import{R as e}from"./iframe-Dzq6KhZI.js";import{A as a}from"./AreaChart-3aA5igc4.js";import{R as r}from"./zIndexSlice-DYy_9E3f.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-CUAX-74C.js";import{X as i}from"./XAxis-Cwq9lpMm.js";import{Y as m}from"./YAxis-BZEADbr5.js";import{A as s}from"./Area-Xxo7qJJS.js";import{T as p}from"./Tooltip-Db2d9pWw.js";import{L as f}from"./LineChart-CpZykxoT.js";import{L as x}from"./Line-BjRSCYND.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Du3nHOoA.js";import"./resolveDefaultProps-BRjkVoLn.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B8Xp5jln.js";import"./throttle-PAjjPANm.js";import"./index-BecjNu5M.js";import"./index-DZ0fS5qA.js";import"./polarAxisSelectors-BWIDzk5M.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BwgC5IAo.js";import"./index-CVNCOx1i.js";import"./index-CMF9Loaq.js";import"./renderedTicksSlice-B-37bEiL.js";import"./index-DAhgw1CA.js";import"./fillDefinitions-BkZRDt9Y.js";import"./CartesianChart-Bid-fMci.js";import"./ZIndexPortal-D7MLJjGY.js";import"./CategoricalChart-dB5tt0RG.js";import"./CartesianAxis-DeYfDX_6.js";import"./Layer-DdRdeMHx.js";import"./Text-D6SfU34x.js";import"./DOMUtils-Dv3oYuXo.js";import"./ZIndexLayer-B0fPlQAE.js";import"./Label-ns1HN8QT.js";import"./types-Bt-JjK9T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-0dTnEet5.js";import"./ActivePoints-APIfm04L.js";import"./Dot-BGvDEhvz.js";import"./activeStyles-B6qdsX9q.js";import"./useAnimationId-B5vYW3bS.js";import"./dataEntryStyles-BDzv2dJf.js";import"./Symbols-CuwHSUOy.js";import"./symbol-5MHZNE2z.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C8-iEcE-.js";import"./getRadiusAndStrokeWidthFromDot-CAouDUSk.js";import"./ActiveShapeUtils-qY34SWQy.js";import"./Curve-GBvSi4lY.js";import"./step-CPy7v0ge.js";import"./useEffectiveDataKey-2DeBYWTa.js";import"./useElementOffset-L0DqCH6F.js";import"./uniqBy-wUI6H3pU.js";import"./iteratee-2KPcfIOh.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DM8bh02F.js";import"./Rectangle-BEWurK0o.js";import"./util-Dxo8gN5i.js";import"./Sector-Cnt-x8fY.js";import"./ErrorBarContext-DWqusyea.js";const we={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},Fe=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};export{t as MultiChartFlexbox,n as ResponsiveContainerWithFlexbox,Fe as __namedExportsOrder,we as default};
