import{R as t}from"./iframe-DHxweIO9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cdmy20fv.js";import{R as l}from"./zIndexSlice-oAGhcyxs.js";import{C as x}from"./ComposedChart-RKqXsJZg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CAd9YPjJ.js";import{L as a}from"./Line-i-hk5T1C.js";import{X as c}from"./XAxis-by-9KJMG.js";import{T as g}from"./Tooltip-B0F9H5iz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C0Lt804T.js";import"./CartesianAxis-CVNW_DPG.js";import"./Layer-Ck33QkwT.js";import"./resolveDefaultProps-BFfik0lP.js";import"./Text-r1UAkK_M.js";import"./DOMUtils-CB5jUme8.js";import"./isWellBehavedNumber-zbgy0N68.js";import"./Label-Hedzo6WI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-tleOLVC8.js";import"./index-BPm8HOAZ.js";import"./index-D2s_06CJ.js";import"./types-D6mO4BwK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D0SVQkh2.js";import"./immer-LtTlQghk.js";import"./RechartsWrapper-B1v1VArt.js";import"./index-Cen9NMit.js";import"./index-1DHoilgY.js";import"./axisSelectors-BtfV9moc.js";import"./d3-scale-8GVIzX8d.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FIs-jkte.js";import"./chartDataContext-BdeADzKD.js";import"./CategoricalChart-DTsRp_4F.js";import"./tooltipContext-Bs6K6Vjj.js";import"./AnimatedItems-CcOK_yF7.js";import"./useAnimationId-CKZSDbra.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-eYgp7t5C.js";import"./ActiveShapeUtils-BTTuLaTo.js";import"./RegisterGraphicalItemId-D9fHh-dg.js";import"./ErrorBarContext-Dm9lKBps.js";import"./GraphicalItemClipPath-DNkFii-i.js";import"./SetGraphicalItem-BdtIdG4P.js";import"./getZIndexFromUnknown-B7WRUIro.js";import"./graphicalItemSelectors-B6UttE3J.js";import"./Curve-BHn37Kg3.js";import"./step-CNOFf0Gl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BYS8rjGP.js";import"./Dot-CpI4OitO.js";import"./getRadiusAndStrokeWidthFromDot-DwZJEjHx.js";import"./useElementOffset-CQBXWs47.js";import"./uniqBy-DNFOk9_5.js";import"./iteratee-B_9DEeWv.js";import"./Cross-o6lG5OwG.js";import"./Sector-CiNQMXQF.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
