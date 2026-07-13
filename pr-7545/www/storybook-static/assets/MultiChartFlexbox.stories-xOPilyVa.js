import{R as e}from"./iframe-BLb3YVtb.js";import{A as r}from"./AreaChart-D97nVPH2.js";import{R as n}from"./zIndexSlice-DJkgkDD9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-BpK60PEo.js";import{X as i}from"./XAxis-DkAVE8hF.js";import{Y as m}from"./YAxis-fcMK6IsP.js";import{A as l}from"./Area-2Pg4_0i_.js";import{T as s}from"./Tooltip-CDZM8gtJ.js";import{L as f}from"./LineChart-CmHIaU7F.js";import{L as x}from"./Line-CqqpJna2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CUaMC7NX.js";import"./index-DpQytYeA.js";import"./index-Cj1DGWT6.js";import"./index-DEpMuUHp.js";import"./index-wtrxX94s.js";import"./throttle-6auUp_qF.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-k5ys3P6y.js";import"./axisSelectors-DadMFlsr.js";import"./resolveDefaultProps-CnVWahPK.js";import"./isWellBehavedNumber-DlUvkjSQ.js";import"./d3-scale-Bikema70.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B4u-2HHw.js";import"./chartDataContext-BoMs8zEW.js";import"./CategoricalChart-Csrvckvr.js";import"./CartesianAxis-BbjeI4ni.js";import"./Layer-BK8zFmi3.js";import"./Text-IRDE_cDN.js";import"./DOMUtils-_5JDSOjo.js";import"./Label-DW72PY7h.js";import"./ZIndexLayer-5e79PAf2.js";import"./types-45FMQ0ZC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-VUSNP4y9.js";import"./useAnimationId-nzk_I_IH.js";import"./ActivePoints-Bm_TZ0P6.js";import"./Dot-D_39xHUo.js";import"./RegisterGraphicalItemId-Byl2Zyfr.js";import"./GraphicalItemClipPath-gmGdN2WI.js";import"./SetGraphicalItem-BWF_fkaR.js";import"./getRadiusAndStrokeWidthFromDot-erroBPpZ.js";import"./ActiveShapeUtils-2WDiJcdZ.js";import"./Curve-gD93iCPz.js";import"./step-DW4vIB3R.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CmXLyXrM.js";import"./useElementOffset-CQsk5lW6.js";import"./uniqBy-CVPPpRZP.js";import"./iteratee-BihC2xCb.js";import"./Cross-D1JRPJfe.js";import"./Rectangle-Deq9IpXZ.js";import"./util-Dxo8gN5i.js";import"./Sector-Cm35b88d.js";import"./ErrorBarContext-CdfKpXhM.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
