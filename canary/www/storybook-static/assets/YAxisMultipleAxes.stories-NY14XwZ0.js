import{e as t}from"./iframe-B_h1eZxb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-DgW-EgkF.js";import{R as l}from"./arrayEqualityCheck-BQ7vn4Fs.js";import{C as x}from"./ComposedChart-DmYHdEo-.js";import{B as o}from"./Bar-BOotMKgr.js";import{L as a}from"./Line-DqbVJ-Iu.js";import{X as c}from"./XAxis-Mxp9ktjo.js";import{T as A}from"./Tooltip-DpipJDfY.js";import{R as g}from"./RechartsHookInspector-CaskrBRm.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B1vNlzd5.js";import"./CartesianAxis-DOEAGTwm.js";import"./Layer-YFSiP5O_.js";import"./Text-3ZnKfMzL.js";import"./DOMUtils-CPt0eNTU.js";import"./Label-B4qm1C3r.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-O03ayMNB.js";import"./zIndexSlice-DBtbpS_b.js";import"./types-DbDrWtQW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-tOZxoK0e.js";import"./axisSelectors-BH0L-ggM.js";import"./RechartsWrapper-GoD8D7jd.js";import"./CartesianChart-BDgEI9ov.js";import"./chartDataContext-BQaQDl0i.js";import"./CategoricalChart-Ba1gSjPg.js";import"./tooltipContext-KGWC9APg.js";import"./ReactUtils-DsQBac2C.js";import"./ActiveShapeUtils-CedxEX3v.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EuLtLzS8.js";import"./useAnimationId-BJhibfpC.js";import"./Trapezoid-CJEFZDfs.js";import"./Sector-CFscv7k5.js";import"./Symbols-3gLai2FA.js";import"./Curve-BIskmgLq.js";import"./RegisterGraphicalItemId-DWqCI4mY.js";import"./ErrorBarContext-hJIAPStP.js";import"./GraphicalItemClipPath-CYkgNVtV.js";import"./SetGraphicalItem-BXR0TSlG.js";import"./getZIndexFromUnknown-D9vWIQwc.js";import"./graphicalItemSelectors-DbZWmw28.js";import"./ActivePoints-BWqrE6Pi.js";import"./Dot-5EH031rg.js";import"./getRadiusAndStrokeWidthFromDot-B64kjpoC.js";import"./useElementOffset-C7pRLK6G.js";import"./iteratee-JecoT9nP.js";import"./Cross-DBGWeScq.js";import"./index-iiBRXnxx.js";import"./ChartSizeDimensions-KhnO1Uhi.js";import"./OffsetShower-DZ8KqkSb.js";import"./PlotAreaShower-CXGDRKi2.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
