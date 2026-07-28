import{R as e}from"./iframe-DUrhAGem.js";import{A as r}from"./AreaChart-BFz2xisJ.js";import{R as o}from"./zIndexSlice-DdMK3B0N.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DS7fbmD7.js";import{X as i}from"./XAxis-RIRw3T0L.js";import{Y as m}from"./YAxis--wp8j7v5.js";import{A as p}from"./Area-iDMPcWKr.js";import{T as s}from"./Tooltip-CgqeczDe.js";import{L as f}from"./LineChart-hkFh54b5.js";import{L as x}from"./Line-CBMbg85k.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BnFDuvuz.js";import"./index-Cpmma9TD.js";import"./index-CNLWSLM9.js";import"./index-DCvD1AlG.js";import"./index-Ci9yztB-.js";import"./throttle-D3vyfJ8U.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DZdK350N.js";import"./axisSelectors-DZbM2Ze4.js";import"./resolveDefaultProps-BTGu5wQu.js";import"./isWellBehavedNumber-DFEWDh2V.js";import"./d3-scale-SkNolWO8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CWlmKWcs.js";import"./chartDataContext-DaAbIer4.js";import"./CategoricalChart-CpTQxP4M.js";import"./CartesianAxis-IffF52gj.js";import"./Layer-Dt-vE1vN.js";import"./Text-BrHlFoZT.js";import"./DOMUtils-CoHfxK0O.js";import"./Label-Y4Dm0VZ7.js";import"./ZIndexLayer-CXa7SyiJ.js";import"./types-ClGgKr9E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DPqqk1vy.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-wThfzOGn.js";import"./useAnimationId-VITr_DdB.js";import"./ActivePoints-CwAypjqz.js";import"./Dot-pQkDRCWY.js";import"./RegisterGraphicalItemId-Ck0eBYhQ.js";import"./GraphicalItemClipPath-DZHG2jah.js";import"./SetGraphicalItem-D3CB3LDo.js";import"./getRadiusAndStrokeWidthFromDot-CJOj0WiY.js";import"./ActiveShapeUtils-0ZcDx16I.js";import"./Curve-95W41D07.js";import"./step-1cVCQ5Jl.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DBNUyimm.js";import"./useElementOffset-G25gOvED.js";import"./uniqBy-jcaqdoDx.js";import"./iteratee-B2QDbcSu.js";import"./Cross-CcQ18uYf.js";import"./Rectangle-D_OnYWLV.js";import"./util-Dxo8gN5i.js";import"./Sector-C15_tvGW.js";import"./ErrorBarContext-1rKXFGMB.js";const Ke={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const De=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,De as __namedExportsOrder,Ke as default};
