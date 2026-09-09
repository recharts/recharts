import{R as e}from"./iframe-DFG5UB_B.js";import{A as a}from"./AreaChart-6sVuBKzC.js";import{R as r}from"./zIndexSlice-BfnucyES.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-D6XXFOpi.js";import{X as i}from"./XAxis-BGV0t6fj.js";import{Y as m}from"./YAxis-C9ahxlQr.js";import{A as s}from"./Area-BPvEvumh.js";import{T as p}from"./Tooltip-BX_C2Z3k.js";import{L as f}from"./LineChart-aN3Ktnvk.js";import{L as x}from"./Line-DbNr04kS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6oLib6N.js";import"./resolveDefaultProps-BatIk00Z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-THUDlcaK.js";import"./throttle-8CKkbV4u.js";import"./index-CvfO2mCp.js";import"./index-DZ38vEa6.js";import"./isWellBehavedNumber-LLrASzdJ.js";import"./d3-scale-CVPVhJLx.js";import"./index-DPl35esh.js";import"./index-CFKpipae.js";import"./renderedTicksSlice-BAoPBO0b.js";import"./index-Bx8tOa6m.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CyJda43K.js";import"./chartDataContext-CMj3DEnW.js";import"./CategoricalChart-DoM1RUNO.js";import"./CartesianAxis-BNuKFBQN.js";import"./Layer-CTQ0XvXO.js";import"./Text-CeNXkw59.js";import"./DOMUtils-BhwdevaN.js";import"./useId-s4zjQZaU.js";import"./useBackwardsCompatibleTheme-CQyv0Qul.js";import"./Label-BlYeas0v.js";import"./ZIndexLayer-BhF6Z1GT.js";import"./types-DcAH2tiO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DaUsoCvA.js";import"./useAnimationId-DtAgjjoV.js";import"./ActivePoints-DcPgsYfH.js";import"./Dot-DokBxO_D.js";import"./RegisterGraphicalItemId-7hocZulP.js";import"./GraphicalItemClipPath-Dn5pirN6.js";import"./SetGraphicalItem-B5Jco2Ub.js";import"./getRadiusAndStrokeWidthFromDot-BtIvPgrq.js";import"./ActiveShapeUtils-BBhCvNS_.js";import"./Curve-D7P2ouTL.js";import"./step-Cpq8yTJq.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D1Y6AxtT.js";import"./useElementOffset-CESdl8j9.js";import"./uniqBy-BvJpBkfI.js";import"./iteratee-CT_szyVB.js";import"./Cross-B0BI2ykV.js";import"./Rectangle-DvysmnTh.js";import"./util-Dxo8gN5i.js";import"./Sector-Cn30566z.js";import"./ErrorBarContext-SVRkM6ha.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
