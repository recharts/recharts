import{R as e}from"./iframe-Ca9zq6-c.js";import{A as r}from"./AreaChart-LvUiuH5_.js";import{R as n}from"./zIndexSlice-CR-xpxM6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-BPgnvgxf.js";import{X as i}from"./XAxis-BXUxDWml.js";import{Y as m}from"./YAxis-Di_pPAFf.js";import{A as l}from"./Area-Bb2U3BgG.js";import{T as s}from"./Tooltip-BNk2Rvy8.js";import{L as f}from"./LineChart-kjNqkyy3.js";import{L as x}from"./Line-C7QEoVzF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CaG48vMC.js";import"./index-oZCeDex2.js";import"./index-FbuB2ssV.js";import"./index-BtFF0BK3.js";import"./index-D-6jHIBZ.js";import"./immer-BRLk8fdE.js";import"./get-CVL7Gg7t.js";import"./renderedTicksSlice-g-m8sL3N.js";import"./axisSelectors-CKheeyoe.js";import"./d3-scale-BmqB7fOq.js";import"./resolveDefaultProps-aQu_YsJN.js";import"./isWellBehavedNumber-CqGPlgER.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCrg56CU.js";import"./chartDataContext-Bliq4f83.js";import"./CategoricalChart-DP-UXbjk.js";import"./CartesianAxis-Cdin4D0O.js";import"./Layer-D2dY01rr.js";import"./Text-BceZOupb.js";import"./DOMUtils-CWZfW9Q5.js";import"./Label-Dc6nn1YN.js";import"./ZIndexLayer-N_1TQ7Pc.js";import"./types-DL0DYnfp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-G2tp0Yan.js";import"./step-D387uCSJ.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CQ3qeCfU.js";import"./ActivePoints-BmtaSDFt.js";import"./Dot-DVfqq-WH.js";import"./RegisterGraphicalItemId-BlhUjcl6.js";import"./GraphicalItemClipPath-CL4eJ5Gf.js";import"./SetGraphicalItem-DuOLtcMc.js";import"./useAnimationId-DX_MO7p4.js";import"./getRadiusAndStrokeWidthFromDot-D0JPsbB9.js";import"./graphicalItemSelectors-CQ9fLIUB.js";import"./useElementOffset-lMCe9HxU.js";import"./uniqBy-DQNXoyeH.js";import"./iteratee-BGMi6Zy8.js";import"./Cross-Y5-RDaB1.js";import"./Rectangle-Cd2dU1AM.js";import"./Sector-Bo6M0KYh.js";import"./ErrorBarContext-BNMjRvsS.js";import"./ActiveShapeUtils-zHL_kIK3.js";const Ae={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Re=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Re as __namedExportsOrder,Ae as default};
