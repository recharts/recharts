import{R as e}from"./iframe-DIhQo_8Y.js";import{A as r}from"./AreaChart-DVCw2TON.js";import{R as o}from"./zIndexSlice-CGgr09GZ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DJEg4-FR.js";import{X as i}from"./XAxis-BpVdYfJg.js";import{Y as m}from"./YAxis-DaA2UazR.js";import{A as s}from"./Area-CSXhuXV4.js";import{T as p}from"./Tooltip-CLrqdAE8.js";import{L as f}from"./LineChart-_jrRxk-M.js";import{L as x}from"./Line-DEkyIRox.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRimQmLV.js";import"./index-BC5_sjA-.js";import"./index-RbONCBjN.js";import"./index-Dgm3vG4i.js";import"./index-BF8H9JZN.js";import"./throttle-B5VRQcq4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Gg8H4O2J.js";import"./resolveDefaultProps-hi_Ykzi4.js";import"./isWellBehavedNumber-BiD1hUdH.js";import"./d3-scale-DTMlXSKJ.js";import"./renderedTicksSlice-Co5rDdJd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DwM9PUKm.js";import"./chartDataContext-DFyWuVHZ.js";import"./CategoricalChart-CgO2X-rw.js";import"./CartesianAxis-4De8rCJ6.js";import"./Layer-BQPvkkvd.js";import"./Text-5eA_PDhZ.js";import"./DOMUtils-Cs86oaAG.js";import"./Label-CVkJGixO.js";import"./ZIndexLayer-B8ZTodeV.js";import"./types-ZiiagxD1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C_YQ-08p.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DEBP1yTo.js";import"./useAnimationId-CRkvHyGK.js";import"./ActivePoints-CJTgILF2.js";import"./Dot-BiDh7UAw.js";import"./RegisterGraphicalItemId-DMf10IHd.js";import"./GraphicalItemClipPath-BlWn4Cda.js";import"./SetGraphicalItem-CDNxzvex.js";import"./getRadiusAndStrokeWidthFromDot-DPHCRHA9.js";import"./ActiveShapeUtils-DPvlIPGu.js";import"./Curve-BXnwyB8Q.js";import"./step-kN_jTjZP.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BJfLPceb.js";import"./useElementOffset-CD90jGAB.js";import"./uniqBy-DEkqq9OP.js";import"./iteratee-C_S5i7R9.js";import"./Cross-DMyoXCGS.js";import"./Rectangle-brCqUJwM.js";import"./util-Dxo8gN5i.js";import"./Sector-CFcXtW_P.js";import"./ErrorBarContext-RhNJ5kjd.js";const De={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,u,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Pe=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Pe as __namedExportsOrder,De as default};
