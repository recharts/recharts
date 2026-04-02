import{e as t}from"./iframe-C9RdRDH3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-JD4R_vdV.js";import{R as l}from"./arrayEqualityCheck-HNNWYF-c.js";import{C as x}from"./ComposedChart-CznI7Qr9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-YvgfoYnT.js";import{L as a}from"./Line-hOd9fGN2.js";import{X as A}from"./XAxis-zBRK63wF.js";import{T as g}from"./Tooltip-hUESGT__.js";import{R as f}from"./RechartsHookInspector-CTsDIORN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B-LYb471.js";import"./Layer-Br4TNC_V.js";import"./resolveDefaultProps-cmmY0qvO.js";import"./Text-wGfDkrTn.js";import"./DOMUtils-Btd4Fsjb.js";import"./Label-nmn7wUcC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BHSqW2ug.js";import"./zIndexSlice-BbsfkO0E.js";import"./immer-Bs-9thuH.js";import"./types-zOKv99jr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BEDhfrBW.js";import"./hooks-wHvHG3dE.js";import"./axisSelectors-D6QzvLNM.js";import"./d3-scale-C5VHC7vJ.js";import"./RechartsWrapper-BmF3qkQ2.js";import"./index-DVhUM6Av.js";import"./CartesianChart-CdaihLfO.js";import"./chartDataContext-BYUFQouT.js";import"./CategoricalChart-DNwSkE9v.js";import"./tooltipContext-Ch9_uRc6.js";import"./ReactUtils-BodNcXDX.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CdfDZypJ.js";import"./isPlainObject-BkahSEKD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D2WqxHR4.js";import"./useAnimationId-Dkvf8CAV.js";import"./Trapezoid-CaO4Za9k.js";import"./Sector-Dlz-xsu0.js";import"./Symbols-D5iKcEZY.js";import"./symbol-B9BxRARk.js";import"./step-By0pLWNs.js";import"./Curve-j2GFynBi.js";import"./RegisterGraphicalItemId-lJJ2Llx7.js";import"./ErrorBarContext-Df_rxzkL.js";import"./GraphicalItemClipPath-BaxGUmwM.js";import"./SetGraphicalItem-OEoYsD-F.js";import"./getZIndexFromUnknown-UIZVUq3C.js";import"./graphicalItemSelectors-Xffr_viX.js";import"./ActivePoints-DehllWrE.js";import"./Dot-D09_z6XC.js";import"./getRadiusAndStrokeWidthFromDot-B5vJvzV2.js";import"./useElementOffset-1-iEdSlv.js";import"./uniqBy-Ctz7O3Q0.js";import"./iteratee-CqWD3rtL.js";import"./Cross-BAMZzrR9.js";import"./index-iNo1MV8G.js";import"./ChartSizeDimensions-BfBAtZfD.js";import"./OffsetShower-DGVkIb09.js";import"./PlotAreaShower-DbkHyMR-.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
