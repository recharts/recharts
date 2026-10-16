import{R as e}from"./iframe-R8qakbXa.js";import{A as a}from"./AreaChart-B4AWon1j.js";import{R as r}from"./zIndexSlice-CpW5IUCm.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-B-hfSGh5.js";import{X as i}from"./XAxis-C4Jew8Rv.js";import{Y as m}from"./YAxis-ByXOMKUb.js";import{A as s}from"./Area-cv2NLsFP.js";import{T as p}from"./Tooltip-BCWvkX_I.js";import{L as f}from"./LineChart-R_vEBtgH.js";import{L as x}from"./Line-C0UZrz4D.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ClWcdPE7.js";import"./resolveDefaultProps-CKR1Qcev.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DMTHYW2V.js";import"./throttle-B9oD6XZ1.js";import"./index-BFIsGGpk.js";import"./index-igt8webG.js";import"./isWellBehavedNumber-B09TyYXX.js";import"./d3-scale-aDQi0991.js";import"./index-BFytD52I.js";import"./index-CMthufc-.js";import"./renderedTicksSlice-BQVB4poR.js";import"./index-Di16hjPT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-PED4jNlL.js";import"./chartDataContext-BSaHGzuI.js";import"./CategoricalChart-DaUIhj12.js";import"./CartesianAxis-D_UchkJi.js";import"./Layer-CmAPD_t-.js";import"./Text-DWNopLVO.js";import"./pageBackground-C5CyBpzw.js";import"./useId-bPLq3L_8.js";import"./useBackwardsCompatibleTheme-qV0asEjz.js";import"./Label-KdqZDMP0.js";import"./ZIndexLayer-BembMDFS.js";import"./types-D_TtzLi3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-B3GTJvDM.js";import"./useAnimationId-CjllIhER.js";import"./dataEntryStyles-DI0HDDLL.js";import"./ActivePoints-Bp8whF8k.js";import"./Dot-BkoFNCjF.js";import"./GraphicalItemClipPath-BVAEKKRa.js";import"./SetGraphicalItem-Bvw8mbwf.js";import"./getRadiusAndStrokeWidthFromDot-CMshxAsh.js";import"./ActiveShapeUtils-D6A65k3S.js";import"./Curve-C-kAiHcE.js";import"./step-BfWCr2W6.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DI06uwcg.js";import"./useElementOffset-C5Bgs-mL.js";import"./uniqBy-DYQ_KcVA.js";import"./iteratee-CNuCkrqA.js";import"./Cross-DEeio74d.js";import"./Rectangle-iquA0V0c.js";import"./util-Dxo8gN5i.js";import"./Sector-CKO5Jhj4.js";import"./ErrorBarContext-0rDV8hpt.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
