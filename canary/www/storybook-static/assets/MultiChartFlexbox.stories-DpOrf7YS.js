import{e}from"./iframe-Dw3q2J_C.js";import{A as r}from"./AreaChart-CZRjeT1u.js";import{R as n}from"./arrayEqualityCheck-CyZN96pQ.js";import{C as o}from"./CartesianGrid-BHFrmdCe.js";import{X as m}from"./XAxis-BkGhyUaZ.js";import{Y as i}from"./YAxis-Rj4UToqR.js";import{A as l}from"./Area-CgFS1f82.js";import{T as s}from"./Tooltip-0x8wBCfm.js";import{R as f}from"./RechartsHookInspector-CjBXEdYk.js";import{L as E}from"./LineChart-C1EJvARN.js";import{L as x}from"./Line-c1IAKOzu.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxCpSvqF.js";import"./hooks-CXCEGVm_.js";import"./axisSelectors-Bj4F6VGN.js";import"./zIndexSlice-CgOi6Kpf.js";import"./resolveDefaultProps-BpxWTFo7.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BoeRzCq2.js";import"./chartDataContext-toYkGVnu.js";import"./CategoricalChart-D0JPHmvG.js";import"./CartesianAxis-Dx05xS85.js";import"./Layer-kgIv22jT.js";import"./Text-DlpZzH26.js";import"./DOMUtils-9f_FxyP7.js";import"./Label-BTeufvbK.js";import"./ZIndexLayer-QOZqstTD.js";import"./types-BJHbMGwM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DlYk4-Kk.js";import"./ReactUtils-CRr71kpZ.js";import"./ActivePoints-D4tj1Ft8.js";import"./Dot-U-LLWdez.js";import"./RegisterGraphicalItemId-CrW_A7sx.js";import"./GraphicalItemClipPath-BL_BqIRg.js";import"./SetGraphicalItem-C0Kooi_K.js";import"./useAnimationId-BJQnqM8-.js";import"./getRadiusAndStrokeWidthFromDot-DUMZDB8N.js";import"./graphicalItemSelectors-3hnzH_cf.js";import"./useElementOffset-m4QFPyQu.js";import"./iteratee-CYRk1_iR.js";import"./Cross-Btj8qbbV.js";import"./Rectangle-CdkJqkle.js";import"./Sector-C3UDCS_F.js";import"./index-cG5s137W.js";import"./ChartSizeDimensions-BOI7XDYO.js";import"./OffsetShower-shA12VSX.js";import"./PlotAreaShower-DksCyK2N.js";import"./ErrorBarContext-CH81KESR.js";import"./ActiveShapeUtils-CnPzR9TY.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BYebN7Pj.js";import"./Symbols-CuhIBlUX.js";const Ce={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
                <RechartsHookInspector />
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ae=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Ae as __namedExportsOrder,Ce as default};
