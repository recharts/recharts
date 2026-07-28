import{R as e}from"./iframe-CzzdtdLH.js";import{A as r}from"./AreaChart-DMD6Khq9.js";import{R as o}from"./zIndexSlice-Co00U7DY.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CONZzXeZ.js";import{X as i}from"./XAxis-CKEr4FP9.js";import{Y as m}from"./YAxis-xlB7Mrcu.js";import{A as p}from"./Area-C_qfp_yg.js";import{T as s}from"./Tooltip-CXOG8T9I.js";import{L as f}from"./LineChart-CRYLVXcn.js";import{L as x}from"./Line-BIkkaUAa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJjI_Ka0.js";import"./index-Bnee00Tj.js";import"./index-C75_nTb2.js";import"./index-64quDrFB.js";import"./index-DWpzXqnr.js";import"./throttle-DKJrGqy3.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-1HW0Usy7.js";import"./axisSelectors-BlRIZcT4.js";import"./resolveDefaultProps-BjUNTsKn.js";import"./isWellBehavedNumber-BmNKw_Tm.js";import"./d3-scale-pYyMK9Lh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CuTVmHhm.js";import"./chartDataContext-BZcRmYig.js";import"./CategoricalChart-VSe_1AC9.js";import"./CartesianAxis-BbUS-Vpa.js";import"./Layer-BbK8NiGM.js";import"./Text-0Zz8t0sM.js";import"./DOMUtils-DH9j7AXM.js";import"./Label-CL5-PwM4.js";import"./ZIndexLayer-ChHVLqdE.js";import"./types-3QfDILpo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BUtRhNjz.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-BMiyvThI.js";import"./useAnimationId-C9cdprRM.js";import"./ActivePoints-B_ez_f7F.js";import"./Dot-BX-Vbuyt.js";import"./RegisterGraphicalItemId-BU-YkEzl.js";import"./GraphicalItemClipPath-B0mB6y5l.js";import"./SetGraphicalItem-tk_sKpy7.js";import"./getRadiusAndStrokeWidthFromDot-DFgztpRX.js";import"./ActiveShapeUtils-DWVSurhB.js";import"./Curve-Jr9YsAj6.js";import"./step-R9BHjTQW.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BaSKkPeO.js";import"./useElementOffset-DxiJzbv2.js";import"./uniqBy-CiFzx0lO.js";import"./iteratee-F5ErMUJK.js";import"./Cross-B-pr5MkY.js";import"./Rectangle-COPtEdoX.js";import"./util-Dxo8gN5i.js";import"./Sector-CebjY1i8.js";import"./ErrorBarContext-ZLp962OP.js";const Ke={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
