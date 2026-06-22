import{R as e}from"./iframe-DghEAMN6.js";import{A as r}from"./AreaChart-BFN1rdVQ.js";import{R as n}from"./zIndexSlice-DZVgvaAB.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-D5a1CLTf.js";import{X as i}from"./XAxis-BmVtlHU0.js";import{Y as m}from"./YAxis-S3ValhBK.js";import{A as l}from"./Area-B-nqXIJp.js";import{T as s}from"./Tooltip-tQ4ohRou.js";import{L as f}from"./LineChart-Cs2BJgju.js";import{L as x}from"./Line-BWhqLBJG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--epX0hHz.js";import"./index-CHxwPLCw.js";import"./index-FvypkAhj.js";import"./index-DwTkm5Gc.js";import"./index-BNbzKJUN.js";import"./immer-Dzr4hzbh.js";import"./get-OeFwIBZb.js";import"./renderedTicksSlice-xCX0SP0o.js";import"./axisSelectors-Cx52Tyf1.js";import"./d3-scale-CUSv4nyH.js";import"./resolveDefaultProps-DtqwpnL6.js";import"./isWellBehavedNumber-2WeEbslz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B2gIIl6u.js";import"./chartDataContext-DmtHMzxl.js";import"./CategoricalChart-mficH34_.js";import"./CartesianAxis-BBXp2oHY.js";import"./Layer-4aUlzdTp.js";import"./Text-3TARh6pc.js";import"./DOMUtils-Qs3kgbuH.js";import"./Label-5l5u0djs.js";import"./ZIndexLayer-DDP5Eu2k.js";import"./types-Beb7Z0cf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-ChrydhAM.js";import"./useAnimationId-bXkDgMGB.js";import"./ActivePoints-bLjk4mq2.js";import"./Dot-CKGCQ671.js";import"./RegisterGraphicalItemId-BH9Fw2h1.js";import"./GraphicalItemClipPath-B_ue0lJA.js";import"./SetGraphicalItem-DyRJQvTd.js";import"./getRadiusAndStrokeWidthFromDot-7qCiPA0M.js";import"./ActiveShapeUtils-_OCeFGs0.js";import"./Curve-AO8nrk2K.js";import"./step-mxE-OcC-.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-r2j0e_dY.js";import"./useElementOffset-D7P9ru3F.js";import"./uniqBy-C8hQkly0.js";import"./iteratee-B9fRV5MV.js";import"./Cross-B2Awi3bU.js";import"./Rectangle-DBtpOBt5.js";import"./util-Dxo8gN5i.js";import"./Sector-BRXriwAi.js";import"./ErrorBarContext-CWlVXcpe.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
