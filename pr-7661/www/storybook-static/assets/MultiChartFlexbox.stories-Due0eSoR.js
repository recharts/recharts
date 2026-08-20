import{R as e}from"./iframe-Bxb7fTI_.js";import{A as r}from"./AreaChart-DfDMHL9s.js";import{R as o}from"./zIndexSlice-Dc8AhsBR.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Bio2Kdhg.js";import{X as i}from"./XAxis-CkOknljo.js";import{Y as m}from"./YAxis-nAknvnvN.js";import{A as s}from"./Area-y6eSB7HM.js";import{T as p}from"./Tooltip-79hrGs82.js";import{L as f}from"./LineChart-COMIh2_7.js";import{L as x}from"./Line-BOYN2QnI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZ0rQEPQ.js";import"./index-DTEA-FIe.js";import"./index-C-XRKF5d.js";import"./index-Cx8Wpi4i.js";import"./index-Bo-C2AfN.js";import"./throttle-CFHzUNT1.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B6Hc05Ed.js";import"./resolveDefaultProps-BI7lk0Xh.js";import"./isWellBehavedNumber-CwdI5Moi.js";import"./d3-scale-Dc6IGH61.js";import"./renderedTicksSlice-CGX0B5OX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeUsHf5g.js";import"./chartDataContext-BelA56cJ.js";import"./CategoricalChart-D-PTwWFe.js";import"./CartesianAxis-CMkdpaa1.js";import"./Layer-DjfrzuA0.js";import"./Text-CjptF509.js";import"./DOMUtils-pu9LPEtL.js";import"./useId-BnCOmIJ8.js";import"./useBackwardsCompatibleTheme-4TZTHq_s.js";import"./Label-CTFdx9tw.js";import"./ZIndexLayer-oyOyBp5p.js";import"./types-sJxYiwgt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C_-SWE1b.js";import"./useAnimationId-BhzzmCcY.js";import"./ActivePoints-Bdd5ZL2k.js";import"./Dot-CatBtppS.js";import"./RegisterGraphicalItemId-B823gFGg.js";import"./GraphicalItemClipPath-BKsG1i1n.js";import"./SetGraphicalItem-DB73g3d2.js";import"./getRadiusAndStrokeWidthFromDot-CEcgVwhz.js";import"./ActiveShapeUtils-bT-Xy9SL.js";import"./Curve-D4ESszCl.js";import"./step-DmsSDk4K.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DU_mD4XQ.js";import"./useElementOffset-CvkVVO4z.js";import"./uniqBy-DL7Bhf0u.js";import"./iteratee-CRSpQ1DK.js";import"./Cross-BnIYPAob.js";import"./Rectangle-CCwWx1xN.js";import"./util-Dxo8gN5i.js";import"./Sector-CSyIb4pU.js";import"./ErrorBarContext-D8MkcOwe.js";const Pe={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,be as __namedExportsOrder,Pe as default};
