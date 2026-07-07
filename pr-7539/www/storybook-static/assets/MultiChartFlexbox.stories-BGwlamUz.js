import{R as e}from"./iframe-BhYIBUmE.js";import{A as r}from"./AreaChart-CaCoQ22R.js";import{R as n}from"./zIndexSlice-iZ75WhkA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-B8gFCMp1.js";import{X as i}from"./XAxis-B9ZJYuv4.js";import{Y as m}from"./YAxis-BDjlgMSD.js";import{A as l}from"./Area-DMCADZH-.js";import{T as s}from"./Tooltip-DGjcwj5R.js";import{L as f}from"./LineChart-B0mZX7zf.js";import{L as x}from"./Line-CKX7TNtb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQUmtvyG.js";import"./index-BoNxyHn5.js";import"./index-B02QR74t.js";import"./index-DEEvK7wS.js";import"./index-D-p5hhZ6.js";import"./throttle-Y6Q35rOn.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BvbBXc0R.js";import"./axisSelectors-XMI2B6JU.js";import"./resolveDefaultProps-BDtRZXkF.js";import"./isWellBehavedNumber-XdoKmyaC.js";import"./d3-scale-Ca87_qMg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnNFNMoi.js";import"./chartDataContext-DqiOTlWU.js";import"./CategoricalChart-DhAV5rxK.js";import"./CartesianAxis-D47H33vb.js";import"./Layer-Di4CjYT0.js";import"./Text-DvhjqfeR.js";import"./DOMUtils-0OARPr3L.js";import"./Label-D4aavVkg.js";import"./ZIndexLayer-DzEhLRNI.js";import"./types-98-DlTag.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BLN0wGQm.js";import"./useAnimationId-BPiSh6IJ.js";import"./ActivePoints-GDUXfCj4.js";import"./Dot-DorxToFy.js";import"./RegisterGraphicalItemId-BXUxqLaU.js";import"./GraphicalItemClipPath-gTOFxICa.js";import"./SetGraphicalItem-ZzJW--aO.js";import"./getRadiusAndStrokeWidthFromDot-Bno7EZgK.js";import"./ActiveShapeUtils-Di4Bw8dO.js";import"./Curve-BFWIv3Fl.js";import"./step-Dbe6DqiS.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CadEeGVz.js";import"./useElementOffset-CSXMIDAf.js";import"./uniqBy-Br7Gv2yg.js";import"./iteratee-B989Z8v9.js";import"./Cross-Bh5VpJP9.js";import"./Rectangle-BZ1mXMev.js";import"./util-Dxo8gN5i.js";import"./Sector-B7axzzn3.js";import"./ErrorBarContext-CcwUloBe.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
