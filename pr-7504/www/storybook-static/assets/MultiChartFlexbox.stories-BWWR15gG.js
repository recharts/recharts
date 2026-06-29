import{R as e}from"./iframe-C8BOwi09.js";import{A as r}from"./AreaChart-aGO3b37Y.js";import{R as n}from"./zIndexSlice-BhlUeiz9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-AJeyYf-O.js";import{X as i}from"./XAxis-Dm5Odjs3.js";import{Y as m}from"./YAxis-5qfCryrA.js";import{A as l}from"./Area-D5idxNVS.js";import{T as s}from"./Tooltip-Dc0rIQtR.js";import{L as f}from"./LineChart-BOoYgCeJ.js";import{L as x}from"./Line-VLqzwl_7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-A-Jl6gDU.js";import"./index-CXTehsJH.js";import"./index-TdmA2U4u.js";import"./index-C1vV4PmY.js";import"./index-B-s74sFu.js";import"./throttle-DKEMBEBf.js";import"./get-Cxci_11r.js";import"./renderedTicksSlice-LkhfGRkv.js";import"./axisSelectors--BiFDCId.js";import"./d3-scale-Aru4SClR.js";import"./resolveDefaultProps-SXD4-6tw.js";import"./isWellBehavedNumber-lzhpgNRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPjCvOHT.js";import"./chartDataContext-C3Wv6QtC.js";import"./CategoricalChart-qjM85PCb.js";import"./CartesianAxis-CWGT70cF.js";import"./Layer--iJ-Hj_L.js";import"./Text-DAXgjhqJ.js";import"./DOMUtils-Bk8mghFc.js";import"./Label-D4SfTv0v.js";import"./ZIndexLayer-CKEhnbZx.js";import"./types-BPAGzNH6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DJI9G60d.js";import"./useAnimationId-C1RCoeBd.js";import"./ActivePoints-BCpRhB6w.js";import"./Dot-Czqb6tax.js";import"./RegisterGraphicalItemId-D2rzI2r-.js";import"./GraphicalItemClipPath-DQUZZg6C.js";import"./SetGraphicalItem-544HumqF.js";import"./getRadiusAndStrokeWidthFromDot-Bhp0VpHF.js";import"./ActiveShapeUtils-DN8fg87N.js";import"./Curve-CCSLWrMV.js";import"./step-CUCFWzj3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bizb05lq.js";import"./useElementOffset-D3uxDO7B.js";import"./uniqBy-DDmV_BGS.js";import"./iteratee-Br5fFLhE.js";import"./Cross-CKnG02mU.js";import"./Rectangle-B5iv9bX_.js";import"./util-Dxo8gN5i.js";import"./Sector-cFQ9Aldc.js";import"./ErrorBarContext-DLDAFGHH.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
