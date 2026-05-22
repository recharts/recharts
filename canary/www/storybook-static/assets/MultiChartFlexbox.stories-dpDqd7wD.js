import{e}from"./iframe-BhUxTtiL.js";import{A as r}from"./AreaChart-CX69fEZc.js";import{g as o}from"./arrayEqualityCheck-DppgWusB.js";import{p as d}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid--6r5zeu6.js";import{X as m}from"./XAxis-C73en9jh.js";import{Y as i}from"./YAxis-CqkUk7nh.js";import{A as l}from"./Area-CN4OpCEy.js";import{T as s}from"./Tooltip-5YUiJS6V.js";import{R as f}from"./RechartsHookInspector-JMIq0pQS.js";import{L as E}from"./LineChart-L4wvqIBp.js";import{L as x}from"./Line-p3VovnKi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BR1uoXx0.js";import"./index-XjGx_uyE.js";import"./immer-CHCHxlI3.js";import"./hooks-DR2LEq6I.js";import"./axisSelectors-CJkBbfZc.js";import"./d3-scale-XHTmrGeR.js";import"./zIndexSlice-nXWOo65n.js";import"./renderedTicksSlice-CYNpjUFM.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bbu5UDic.js";import"./chartDataContext-l2E_xhbE.js";import"./CategoricalChart-BpuJQUho.js";import"./resolveDefaultProps-BwRhqspK.js";import"./CartesianAxis-Dg6rum68.js";import"./Layer-BGQI9FGV.js";import"./Text-_q4HIlMq.js";import"./DOMUtils-BPHETHho.js";import"./Label-B-L_WnHM.js";import"./ZIndexLayer-BPpIaF6c.js";import"./types-Lg-gn8wA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BICrVSEu.js";import"./step-DotG6x7P.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BLhQELGN.js";import"./ActivePoints-B8FRaVHI.js";import"./Dot-Bn8XUR1d.js";import"./RegisterGraphicalItemId-05uKE1t1.js";import"./GraphicalItemClipPath-CLhlaT2j.js";import"./SetGraphicalItem-C4bg6-5U.js";import"./useAnimationId-B-QfnVAI.js";import"./getRadiusAndStrokeWidthFromDot-CjnN3OM9.js";import"./graphicalItemSelectors-DstPRYkG.js";import"./useElementOffset-JSdm64jE.js";import"./uniqBy-BCcn4akX.js";import"./iteratee-BIvWeTYe.js";import"./Cross-4Dq1pJa5.js";import"./Rectangle-CXSstgx1.js";import"./Sector-C6l3Kc-d.js";import"./index-6wyw6I_N.js";import"./ChartSizeDimensions-Bic6l-OJ.js";import"./OffsetShower-CD4roSzf.js";import"./PlotAreaShower-CXgcskuB.js";import"./ErrorBarContext-xJxnsNXv.js";import"./ActiveShapeUtils-BtaI_SKC.js";const De={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(o,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Pe=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Pe as __namedExportsOrder,De as default};
