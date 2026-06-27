import{R as e}from"./iframe-s6xAG-TK.js";import{A as r}from"./AreaChart-CSEkB-Ln.js";import{R as n}from"./zIndexSlice-CtX8Pm57.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-CHvX6dO6.js";import{X as i}from"./XAxis-ILbWypkw.js";import{Y as m}from"./YAxis-CJIerEpJ.js";import{A as l}from"./Area-Cx20F653.js";import{T as s}from"./Tooltip-DNr4Jqfj.js";import{L as f}from"./LineChart-xgCKS7qA.js";import{L as x}from"./Line-CJL0J86Q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NYzcnM5V.js";import"./index-T8sAqFhz.js";import"./index-BrFiGA_R.js";import"./index-C431joee.js";import"./index-ClUWeLMF.js";import"./immer-BuLmScwe.js";import"./get-BoCVnOHD.js";import"./renderedTicksSlice-iMX2N49n.js";import"./axisSelectors-w5mwcrs7.js";import"./d3-scale-B4pAi3sm.js";import"./resolveDefaultProps-DFiMRXbi.js";import"./isWellBehavedNumber-DWpsZI7G.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3y1BcT9.js";import"./chartDataContext-CYY09pFO.js";import"./CategoricalChart-DLOwP-Jg.js";import"./CartesianAxis-Bzfqb5iI.js";import"./Layer-D5OpM5xs.js";import"./Text-9u_bHJZt.js";import"./DOMUtils-Dzx6jDk6.js";import"./Label-Dp2fRDxb.js";import"./ZIndexLayer-DbooohNT.js";import"./types-DdoD64CJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BLpXLA7r.js";import"./useAnimationId-BfD45VPw.js";import"./ActivePoints-CifW1zG8.js";import"./Dot-uO_lT4NP.js";import"./RegisterGraphicalItemId-irkeH_pD.js";import"./GraphicalItemClipPath-PteXji-2.js";import"./SetGraphicalItem-BaveM8kS.js";import"./getRadiusAndStrokeWidthFromDot-kUCtaSTN.js";import"./ActiveShapeUtils-BRE298QS.js";import"./Curve-BmhK5pW4.js";import"./step-DcuFANAi.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-dZUwQqOx.js";import"./useElementOffset-CP6qr1Um.js";import"./uniqBy-BFlmJl3I.js";import"./iteratee-Bbn7KLaA.js";import"./Cross-DLf2lczu.js";import"./Rectangle-BvbdU8mA.js";import"./util-Dxo8gN5i.js";import"./Sector-DIf9EEf3.js";import"./ErrorBarContext-Df3lolWT.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ke=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,ke as __namedExportsOrder,Re as default};
