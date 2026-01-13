import{e}from"./iframe-B6ZCI1X-.js";import{A as r}from"./AreaChart-CuzTRsuy.js";import{R as n}from"./arrayEqualityCheck-Vy2dcV_o.js";import{C as o}from"./CartesianGrid-C7UogyGe.js";import{X as m}from"./XAxis-C4uw1-2Q.js";import{Y as i}from"./YAxis-Bknejqsk.js";import{A as l}from"./Area-DvDLKKqj.js";import{T as s}from"./Tooltip-C7m83EDP.js";import{R as f}from"./RechartsHookInspector-B_-BIKM5.js";import{L as E}from"./LineChart-DoCvcKkM.js";import{L as x}from"./Line-B1fwKAvO.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cm4MNb60.js";import"./hooks-B7AKPgu3.js";import"./axisSelectors-B7jgX05e.js";import"./zIndexSlice-CZ608RYy.js";import"./resolveDefaultProps-BfRNrOjX.js";import"./PolarUtils-DT5LUPN4.js";import"./CartesianChart-3kl8J4OM.js";import"./chartDataContext-K1HgDw51.js";import"./CategoricalChart-DmGE5R29.js";import"./CartesianAxis-Cgh_nqbT.js";import"./Layer-fYHElE4I.js";import"./Text-1BcInixy.js";import"./DOMUtils-DnJTSxHK.js";import"./Label-D44TMXj3.js";import"./ZIndexLayer-NdV45W3l.js";import"./types-lQyAqjcM.js";import"./Curve-xA1LMbbI.js";import"./ReactUtils-DztpHcKA.js";import"./ActivePoints-Dua7vnpk.js";import"./Dot-BNoOq719.js";import"./RegisterGraphicalItemId-CkZvvq8r.js";import"./GraphicalItemClipPath-BH-LuHt6.js";import"./SetGraphicalItem-BsBYfoCl.js";import"./useAnimationId-Czd9yhg2.js";import"./getRadiusAndStrokeWidthFromDot-CTkwUqhN.js";import"./graphicalItemSelectors-BhWz4r4-.js";import"./useElementOffset-4jS_X3SG.js";import"./iteratee-BH1cr4Fj.js";import"./Cross-Nm4nOG6c.js";import"./Rectangle-Dvu--PZM.js";import"./Sector-oW786f9C.js";import"./index-DYaSePyf.js";import"./ChartSizeDimensions-B6sRHlXe.js";import"./OffsetShower-BW9M7Gqo.js";import"./PlotAreaShower-BOQNx6Qk.js";import"./ErrorBarContext-CRJ4zZZo.js";import"./ActiveShapeUtils-CayjX_j1.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CWebkWYz.js";import"./Symbols-BpZDCS87.js";const xe={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ce=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Ce as __namedExportsOrder,xe as default};
