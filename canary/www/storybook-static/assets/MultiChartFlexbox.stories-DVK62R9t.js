import{R as e}from"./iframe-ClXUkryL.js";import{A as a}from"./AreaChart-CL8ZraIO.js";import{R as r}from"./zIndexSlice-DzUiPhG1.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-Doxf1-eg.js";import{X as i}from"./XAxis-DAmFlkh4.js";import{Y as m}from"./YAxis-CSB-tj7Q.js";import{A as s}from"./Area-Dgm-L1FF.js";import{T as p}from"./Tooltip-CVS8zOAR.js";import{L as f}from"./LineChart-BcUQ_1hT.js";import{L as x}from"./Line-CTNZd68_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4CsKSyh.js";import"./resolveDefaultProps-Be-R1NDV.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BImpBlrZ.js";import"./throttle-CEjR9znF.js";import"./index-1IQ6h1fT.js";import"./index-D1YVhIqp.js";import"./polarAxisSelectors-B2T5HNNu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Crqvu4_S.js";import"./index-DTBjcvrn.js";import"./index-CrY7M_Vr.js";import"./renderedTicksSlice-0uwg5ZfK.js";import"./index-BN7SKK3J.js";import"./fillDefinitions-C705icco.js";import"./CartesianChart-Dl8SN8lO.js";import"./chartDataContext-vv2pvmYC.js";import"./CategoricalChart-B-f9dtfF.js";import"./CartesianAxis-DC6JqvO0.js";import"./Layer-L872TvYf.js";import"./Text-C9XRZpa-.js";import"./ZIndexLayer-CVBpK4Om.js";import"./Label-BMxAhfb3.js";import"./types-la06XTph.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-BBOOYriq.js";import"./dataEntryStyles-Br1h1G1A.js";import"./ActivePoints-FWIT6xTU.js";import"./Dot-ACUQcHT1.js";import"./activeStyles-CbEtMY8z.js";import"./useAnimationId-Dks1GaGE.js";import"./Symbols-x2c8SqkY.js";import"./symbol-DbkjlHpo.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-XdL-o-fT.js";import"./ActiveShapeUtils-Co4M2_jg.js";import"./Curve-MAqNRQ5D.js";import"./step-DKRQgBi6.js";import"./useEffectiveDataKey-OGRxErZi.js";import"./useElementOffset-DeqYTBDK.js";import"./uniqBy-BpqYijuT.js";import"./iteratee-B2tmauo-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-5JluxCld.js";import"./Rectangle-KaRylKEj.js";import"./util-Dxo8gN5i.js";import"./Sector-BP6odGN8.js";import"./ErrorBarContext-BbIl9cJe.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
