import{R as e}from"./iframe-D_SaqINW.js";import{A as r}from"./AreaChart-CAMl-G_R.js";import{R as n}from"./zIndexSlice-Nr9A9_cH.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-BBgyOF2-.js";import{X as i}from"./XAxis-6wdck5XJ.js";import{Y as m}from"./YAxis-DBPcER2k.js";import{A as l}from"./Area-DVqWcwF-.js";import{T as s}from"./Tooltip-CiiLOeCs.js";import{L as f}from"./LineChart-DtRAC6ie.js";import{L as x}from"./Line-CktBvgGg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BOxkh1KP.js";import"./index-SZXFPM2d.js";import"./index-C5cOlUnK.js";import"./index-BiWBdnkZ.js";import"./index-TyDw8B7P.js";import"./immer-4i53sgvd.js";import"./get-DRtBRZ7g.js";import"./renderedTicksSlice-nvcrqMwf.js";import"./axisSelectors-KbW_RdYB.js";import"./d3-scale-CQIw_skn.js";import"./resolveDefaultProps-DUbefueE.js";import"./isWellBehavedNumber-BFJTu4EN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CZi0Hd-v.js";import"./chartDataContext-FaAlL944.js";import"./CategoricalChart-DmnISPC2.js";import"./CartesianAxis-DWHYepa6.js";import"./Layer-CLMd0CrH.js";import"./Text-CDbXravB.js";import"./DOMUtils-olWBsR_G.js";import"./Label-D8rwziA9.js";import"./ZIndexLayer-CNKQ_WkY.js";import"./types-L0YqXeC-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DrX1vaEn.js";import"./useAnimationId-DJVHCfAF.js";import"./ActivePoints-DaZDHHOd.js";import"./Dot-B7iUah-Z.js";import"./RegisterGraphicalItemId-CDtWnv6Z.js";import"./GraphicalItemClipPath-ClsDcJaX.js";import"./SetGraphicalItem-HY1vpJNM.js";import"./getRadiusAndStrokeWidthFromDot-UiXMR6RM.js";import"./ActiveShapeUtils-8phtwrmk.js";import"./Curve-Sg8XUuU0.js";import"./step-DyxZJeHE.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D2YdDHOs.js";import"./useElementOffset-B0pep8Bt.js";import"./uniqBy-DfSS1ssL.js";import"./iteratee-tTd3ivbf.js";import"./Cross-DFz5-w3s.js";import"./Rectangle-CaUfvzDJ.js";import"./util-Dxo8gN5i.js";import"./Sector-CthNfgJi.js";import"./ErrorBarContext-Cv8g9Tm4.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
