import{R as t}from"./iframe-Dgfa45pO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-XwOa9eE6.js";import{R as l}from"./zIndexSlice-C1KjhRe9.js";import{C as x}from"./ComposedChart-DlT_NDd5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C9JUbNld.js";import{L as a}from"./Line-BASvZUAn.js";import{X as c}from"./XAxis-BSLC3Bv_.js";import{T as g}from"./Tooltip-CE3KSJnj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BZICNy-w.js";import"./CartesianAxis-DznDQPew.js";import"./Layer-BwLAkNRA.js";import"./resolveDefaultProps-ChQrXTkd.js";import"./Text-tvsjfW3h.js";import"./DOMUtils-C6RrxFOP.js";import"./isWellBehavedNumber-BrMIbSaZ.js";import"./Label-Dzw51f8E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dy6LsEV1.js";import"./index-BgENuBix.js";import"./index-Bo_UbBqc.js";import"./types-C1ZkWqT0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-fSTgGnjG.js";import"./immer-DVLCs_h8.js";import"./RechartsWrapper-XphNsNZ5.js";import"./index-ksaWIuWX.js";import"./index-CBjnf8TP.js";import"./axisSelectors-4s-45b5o.js";import"./d3-scale-D3oEXvep.js";import"./CartesianChart-BC1ybKqz.js";import"./chartDataContext-xlhPPH5F.js";import"./CategoricalChart-BUu6OQ7Y.js";import"./tooltipContext-gANt9rxI.js";import"./AnimatedItems-CIa4005N.js";import"./useAnimationId-CjXgi841.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CQY8rJu-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B8QNpF57.js";import"./RegisterGraphicalItemId-DMVQPcLn.js";import"./ErrorBarContext-DUzmHtBE.js";import"./GraphicalItemClipPath-CGgVvw3m.js";import"./SetGraphicalItem-eSn4zQ3n.js";import"./getZIndexFromUnknown-Dp2Ioitv.js";import"./graphicalItemSelectors-Bgpj2GzB.js";import"./Curve-DtYKQ2VH.js";import"./step-BZZfKQz_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-jW6GNHGv.js";import"./Dot-DbOxHeVE.js";import"./getRadiusAndStrokeWidthFromDot-KiudXz49.js";import"./useElementOffset-BqMobiPE.js";import"./uniqBy-A8hmwwhf.js";import"./iteratee-B2FVpM9G.js";import"./Cross-Cz3c5tUZ.js";import"./Sector-iD3Kd2J-.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
