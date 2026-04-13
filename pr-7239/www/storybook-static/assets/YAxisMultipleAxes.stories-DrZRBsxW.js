import{e as t}from"./iframe-CQz6-rqU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BQnCi2Gr.js";import{R as l}from"./arrayEqualityCheck-B3hp3dy1.js";import{C as x}from"./ComposedChart-Db6t5I8M.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BIvgf2Fq.js";import{L as a}from"./Line-CqVeTqkE.js";import{X as A}from"./XAxis-CbqTpJSy.js";import{T as g}from"./Tooltip-BWO-9ZCX.js";import{R as f}from"./RechartsHookInspector-B2GPukyV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BA0-wFGi.js";import"./Layer-aJdiXKbK.js";import"./resolveDefaultProps-Bsy3ef9f.js";import"./Text-JvXAfe8A.js";import"./DOMUtils-2zTsLgWC.js";import"./Label-D5a5ehTh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D5ngjIV-.js";import"./zIndexSlice-jdolFKYR.js";import"./immer-C1Ef071P.js";import"./types-XpdbXnbU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D_gYaTKe.js";import"./hooks-Cv8BoRyK.js";import"./axisSelectors-bV92EhmM.js";import"./d3-scale-Dy1NrWss.js";import"./RechartsWrapper-0t3ed1JS.js";import"./index-DcdNEEYJ.js";import"./CartesianChart-KdDR_fN8.js";import"./chartDataContext-BrSsmPTw.js";import"./CategoricalChart-Cya9ekS6.js";import"./tooltipContext-Al2JbnC6.js";import"./ReactUtils-BqVg2WmD.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DN6LeKsQ.js";import"./isPlainObject-rkdQ43EP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cna_W9G7.js";import"./useAnimationId-DfRjeBwp.js";import"./Trapezoid-dmc5_bkF.js";import"./Sector-D8lvqTTS.js";import"./Symbols-BXHTL0iF.js";import"./symbol-BurpkDKi.js";import"./step-DP79CAdJ.js";import"./Curve-3nz25txP.js";import"./RegisterGraphicalItemId-Ch1pO7WV.js";import"./ErrorBarContext-DgfGrsqm.js";import"./GraphicalItemClipPath-CPeTkZJp.js";import"./SetGraphicalItem-DB6-mG_s.js";import"./getZIndexFromUnknown-Cmi6wwmR.js";import"./graphicalItemSelectors-DpyreC0E.js";import"./ActivePoints-C9xPRrJf.js";import"./Dot-DEN8tXMw.js";import"./getRadiusAndStrokeWidthFromDot-CpMo6JgK.js";import"./useElementOffset-DOMlaDHk.js";import"./uniqBy-BpAtPS6e.js";import"./iteratee-Dac6CcmO.js";import"./Cross-CPGx9Rms.js";import"./index-BGBLB-6R.js";import"./ChartSizeDimensions-CkcmSnfk.js";import"./OffsetShower-D1GSKoft.js";import"./PlotAreaShower-L499Q96k.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
