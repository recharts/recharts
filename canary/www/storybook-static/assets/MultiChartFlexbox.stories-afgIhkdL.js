import{e}from"./iframe-D1NCNqUw.js";import{A as r}from"./AreaChart-g9ljPGz-.js";import{R as n}from"./arrayEqualityCheck-CQjIdQCx.js";import{C as o}from"./CartesianGrid-Bd5YNvuL.js";import{X as m}from"./XAxis-u0hdrjRw.js";import{Y as i}from"./YAxis-A9YbMvOB.js";import{A as l}from"./Area-ClLkIZOw.js";import{T as s}from"./Tooltip-DNRnEVuU.js";import{R as f}from"./RechartsHookInspector-ZreWXCAw.js";import{L as E}from"./LineChart-s_0C4HOc.js";import{L as x}from"./Line-6NLHKn5o.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHOsEYDB.js";import"./hooks-JIh16Fdo.js";import"./axisSelectors-I3OUkjeV.js";import"./zIndexSlice-B6vCGJts.js";import"./resolveDefaultProps-Djsbq22w.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-JOI6h5bX.js";import"./chartDataContext-Dg8xMp5I.js";import"./CategoricalChart-Dz9zkg_l.js";import"./CartesianAxis-C56nwzMo.js";import"./Layer-BCRy6dX1.js";import"./Text-IRTIkJKa.js";import"./DOMUtils-DHPWyRpf.js";import"./Label-BNrwDKuI.js";import"./ZIndexLayer-DGrkiEgC.js";import"./types-gvwBC4-3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C3pHY6tL.js";import"./ReactUtils-BB1Bvtm-.js";import"./ActivePoints-B3fzw2dP.js";import"./Dot-Cs7zSf6c.js";import"./RegisterGraphicalItemId-C1aQBUzf.js";import"./GraphicalItemClipPath-BqkTWDYP.js";import"./SetGraphicalItem-D7KZSAt9.js";import"./useAnimationId-CaRLwgfn.js";import"./getRadiusAndStrokeWidthFromDot-CMWXAyTc.js";import"./graphicalItemSelectors-DXCn_-5D.js";import"./useElementOffset-CxGOc-CC.js";import"./iteratee-B-7bARrX.js";import"./Cross-DHzBM6ad.js";import"./Rectangle-BNiHE16P.js";import"./Sector-TTqZtEvI.js";import"./index-BmYae47F.js";import"./ChartSizeDimensions-CQGmt7Jm.js";import"./OffsetShower-jlBTnn9Z.js";import"./PlotAreaShower-CLC5srun.js";import"./ErrorBarContext-DeYCKUhW.js";import"./ActiveShapeUtils-5Ae3vqBy.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BR4vRuXB.js";import"./Symbols-DMX5HiXT.js";const Ce={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ae=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Ae as __namedExportsOrder,Ce as default};
