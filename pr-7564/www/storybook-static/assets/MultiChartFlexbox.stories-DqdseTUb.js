import{R as e}from"./iframe-B-yW787s.js";import{A as r}from"./AreaChart-Bhs38O12.js";import{R as n}from"./zIndexSlice-CKRpx7FD.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-DMiq5X00.js";import{X as i}from"./XAxis-D0UXMK3L.js";import{Y as m}from"./YAxis-DGNSSBsi.js";import{A as l}from"./Area-eJ_3tWTQ.js";import{T as s}from"./Tooltip-CfhG70XA.js";import{L as f}from"./LineChart-BL_VjYIh.js";import{L as x}from"./Line-CK0bz55t.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DSpl9lP_.js";import"./index-TzX_ldyC.js";import"./index-Dh8eUehn.js";import"./index-B8s4lwM0.js";import"./index-BLtMs8ww.js";import"./throttle-B8_9WF3N.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-EV44ZZNX.js";import"./axisSelectors-d9CW9W7w.js";import"./resolveDefaultProps-D6vuKH4c.js";import"./isWellBehavedNumber-C_1nd4jU.js";import"./d3-scale-8a4kRHFN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B08PHStc.js";import"./chartDataContext-DOok0Cd4.js";import"./CategoricalChart-XTSjkgZQ.js";import"./CartesianAxis-BlaAel8_.js";import"./Layer-DVSBdCcq.js";import"./Text-DK2M6QxL.js";import"./DOMUtils-B0UrcgO-.js";import"./Label-BkxmYsWW.js";import"./ZIndexLayer-CdG-cca2.js";import"./types-DcTCoXGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CYFqV_Nm.js";import"./useAnimationId-o-X37ase.js";import"./ActivePoints-DpVBVyJ4.js";import"./Dot-rGFeGUQm.js";import"./RegisterGraphicalItemId-DeFh6f0i.js";import"./GraphicalItemClipPath-_Ex-IG4N.js";import"./SetGraphicalItem-NvPtwEe2.js";import"./getRadiusAndStrokeWidthFromDot-DVenAMua.js";import"./ActiveShapeUtils-Dzsbq5DH.js";import"./Curve-DCdfY6Kv.js";import"./step-BYmVMSZy.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D2riitBr.js";import"./useElementOffset-C-wPzP_t.js";import"./uniqBy-D9O0f4RW.js";import"./iteratee-3rKsZ9vF.js";import"./Cross-D6yxn-4q.js";import"./Rectangle-DKB06qOF.js";import"./util-Dxo8gN5i.js";import"./Sector-CPt2S0K5.js";import"./ErrorBarContext-D17CdNj4.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
