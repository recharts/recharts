import{R as e}from"./iframe-D-BXEDkQ.js";import{A as r}from"./AreaChart-qghWk6H6.js";import{R as n}from"./zIndexSlice-CNOaqOPA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-B1yDuSfR.js";import{X as i}from"./XAxis-CsYsIQZ3.js";import{Y as m}from"./YAxis-CY9nfIzq.js";import{A as l}from"./Area-BHtYnfcV.js";import{T as s}from"./Tooltip-DLESUsdO.js";import{L as f}from"./LineChart-C7AsqbZr.js";import{L as x}from"./Line-BWnL5Flc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAPlnek-.js";import"./index-CSvF-BDD.js";import"./index-Dzr30MxI.js";import"./index-G9DZGzqS.js";import"./index-DyZMLGLF.js";import"./throttle-DcYZZCS9.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BW0B_yyu.js";import"./axisSelectors-DbolJrr5.js";import"./resolveDefaultProps-BCmCl_HK.js";import"./isWellBehavedNumber-DG1BXq00.js";import"./d3-scale-Cw0gW9iZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B9gu2iu_.js";import"./chartDataContext-Drjp45TO.js";import"./CategoricalChart-Dffh87Ow.js";import"./CartesianAxis-BPou2DWk.js";import"./Layer-DZ4WZEl1.js";import"./Text-DKRb_pWs.js";import"./DOMUtils-BtYPMtse.js";import"./Label-BXssQtMI.js";import"./ZIndexLayer-BMtWXslr.js";import"./types-CKqvof5k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Bb-goO_2.js";import"./useAnimationId-BbJgISg4.js";import"./ActivePoints-C16wOqeD.js";import"./Dot-JDsRBdmy.js";import"./RegisterGraphicalItemId-D4LQkijr.js";import"./GraphicalItemClipPath-CpDe9sQE.js";import"./SetGraphicalItem-DFCa6_Km.js";import"./getRadiusAndStrokeWidthFromDot-BimxZCtp.js";import"./ActiveShapeUtils-D6NCpbS5.js";import"./Curve-BiodO3IJ.js";import"./step-O6juOnPn.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DgXVbdYn.js";import"./useElementOffset-DxoNRjwJ.js";import"./uniqBy-Bq10x9oa.js";import"./iteratee-V8Uwp1qB.js";import"./Cross-Dx3XzPYb.js";import"./Rectangle-DhH6fWaa.js";import"./util-Dxo8gN5i.js";import"./Sector-B5fL-Syb.js";import"./ErrorBarContext-CYH48hpc.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
