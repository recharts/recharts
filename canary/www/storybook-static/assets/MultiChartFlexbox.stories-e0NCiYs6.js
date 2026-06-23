import{R as e}from"./iframe-BNzhvzzJ.js";import{A as r}from"./AreaChart-CnDnG19L.js";import{R as n}from"./zIndexSlice-7B2pJ9R1.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-DKpfMs0t.js";import{X as i}from"./XAxis-BHRl-pdi.js";import{Y as m}from"./YAxis-Cl4-_k6Y.js";import{A as l}from"./Area-D4H67wzm.js";import{T as s}from"./Tooltip-CyBpvAoJ.js";import{L as f}from"./LineChart-BMTtnWB_.js";import{L as x}from"./Line-C2yueNGc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHcZLkJ-.js";import"./index-DJTE4prX.js";import"./index-7GSDLfD9.js";import"./index-D7steQeu.js";import"./index-B9gOfTvg.js";import"./immer-_Il6apPt.js";import"./get-Bo6NWZXP.js";import"./renderedTicksSlice-EPo0eGyT.js";import"./axisSelectors-ceyKOVCq.js";import"./d3-scale-DfXMlVb2.js";import"./resolveDefaultProps-D9iASVgR.js";import"./isWellBehavedNumber-Bpef6lI6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CaZD9ouo.js";import"./chartDataContext-BcocN-0J.js";import"./CategoricalChart-C_ukC1b2.js";import"./CartesianAxis-LIK20Nid.js";import"./Layer-xsjkSAFG.js";import"./Text-B7J48mXb.js";import"./DOMUtils-C0rqppVh.js";import"./Label-Cch4VET0.js";import"./ZIndexLayer-DKk9ZSzt.js";import"./types-DwFKy1TI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DiPaozpi.js";import"./useAnimationId-DMdK3Lv6.js";import"./ActivePoints-DK7nKZD0.js";import"./Dot-CBy41HLo.js";import"./RegisterGraphicalItemId-Xkz1LIrr.js";import"./GraphicalItemClipPath-BB5MRsg5.js";import"./SetGraphicalItem-Di0ECEKf.js";import"./getRadiusAndStrokeWidthFromDot-TKmNfgfy.js";import"./ActiveShapeUtils-CfEExsMK.js";import"./Curve-CqMKytty.js";import"./step-DPliw2Y2.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BsfNmkQw.js";import"./useElementOffset-BlJIB82n.js";import"./uniqBy-Bjs8gI_C.js";import"./iteratee-BzF2Jcrq.js";import"./Cross-BkJnnYgS.js";import"./Rectangle-DLdg-C7_.js";import"./util-Dxo8gN5i.js";import"./Sector-C-381x-X.js";import"./ErrorBarContext-_lt3AQQA.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
