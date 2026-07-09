import{R as e}from"./iframe-DnX8r39b.js";import{A as r}from"./AreaChart-DlF7EzLB.js";import{R as n}from"./zIndexSlice-CdRT6CH7.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-DDmG9Fz5.js";import{X as i}from"./XAxis-BTaYdNe8.js";import{Y as m}from"./YAxis-CSFozfSt.js";import{A as l}from"./Area-HyXX87Dg.js";import{T as s}from"./Tooltip-Bacn6d6g.js";import{L as f}from"./LineChart-CV2GDhdl.js";import{L as x}from"./Line-DgV7sV5s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Sbu3sQZd.js";import"./index-CARiuz8r.js";import"./index-lg-7YqR9.js";import"./index-B59DWSJw.js";import"./index-8CcjFvVe.js";import"./throttle-JCKZhQLq.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DDGhfVYq.js";import"./axisSelectors-D4OQvXCv.js";import"./resolveDefaultProps-yb31Cz6R.js";import"./isWellBehavedNumber-ChlqVGNf.js";import"./d3-scale-B45mdNw5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8TrBr0AL.js";import"./chartDataContext-B2KFL-Nz.js";import"./CategoricalChart-DVOQ2_gX.js";import"./CartesianAxis-Cy9WREkT.js";import"./Layer-CauFkfpG.js";import"./Text-BO1t-pUg.js";import"./DOMUtils-jh1pVKRO.js";import"./Label-D3KHAYnK.js";import"./ZIndexLayer-C1d715l9.js";import"./types-CgrT81ZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems--Dg0X7dt.js";import"./useAnimationId-zs5IE8iA.js";import"./ActivePoints-CuEYXnF_.js";import"./Dot-DD3VaHTo.js";import"./RegisterGraphicalItemId-qEo7oahD.js";import"./GraphicalItemClipPath-BiCBWmQX.js";import"./SetGraphicalItem-BXuH3_k3.js";import"./getRadiusAndStrokeWidthFromDot-BTTETrvJ.js";import"./ActiveShapeUtils-C4xeJz4x.js";import"./Curve-Zsfr7xXj.js";import"./step-TiPrAqPO.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CBSU1VvW.js";import"./useElementOffset-BTPLFIFL.js";import"./uniqBy-Cjb0gCKQ.js";import"./iteratee-D8Xc7oTH.js";import"./Cross-DJ_p583i.js";import"./Rectangle-Cv-9SrzG.js";import"./util-Dxo8gN5i.js";import"./Sector-BXJPUv-D.js";import"./ErrorBarContext-C_qu3TpT.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
