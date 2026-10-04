import{R as t}from"./iframe-F-DUQmzx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DMt8A7ih.js";import{R as l}from"./zIndexSlice-B0XgO37h.js";import{C as x}from"./ComposedChart-BciQM212.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-HR2u-7FE.js";import{L as a}from"./Line-D8FTO08W.js";import{X as c}from"./XAxis-CueAAdhT.js";import{T as g}from"./Tooltip-DGfV7n8l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B3Zz6TZ9.js";import"./Text-CORYS8dP.js";import"./resolveDefaultProps-54NLwGe7.js";import"./DOMUtils-DPU74_Ri.js";import"./isWellBehavedNumber-DyMPBI8-.js";import"./useId-CqYFbuGw.js";import"./useBackwardsCompatibleTheme-BfIpGN6N.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-G7VYzfve.js";import"./index-CK09KYl6.js";import"./index-1Q76C7eb.js";import"./RechartsWrapper-CWiWdscD.js";import"./axisSelectors-DjOC7WMp.js";import"./throttle-DpMrsvGt.js";import"./d3-scale-DSOPMY6A.js";import"./index-CT1gIdoP.js";import"./index-EzdhIVAG.js";import"./renderedTicksSlice-COhWqkvU.js";import"./index-DM4X_zuN.js";import"./CartesianAxis-DNFe7OYN.js";import"./Layer-BrEHje-t.js";import"./types-DvcDlHh9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DpAEY0eR.js";import"./chartDataContext-CwixCkf7.js";import"./CategoricalChart-DjizJXcn.js";import"./AnimatedItems-TRoMQ37Y.js";import"./useAnimationId-BjShbhcH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dr6hKtyQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBGLeya9.js";import"./tooltipContext-DdiULKBv.js";import"./RegisterGraphicalItemId-osvmWAHd.js";import"./ErrorBarContext-WZQ5BE4f.js";import"./GraphicalItemClipPath-Ts1JrvmG.js";import"./SetGraphicalItem-Dh88RhAB.js";import"./getZIndexFromUnknown-CMLDvzce.js";import"./useGraphicalItemIdentity-Co6jLI_S.js";import"./dataEntryStyles-C8fldv-r.js";import"./Curve-Bx9XDM_v.js";import"./step-B5u9AGFi.js";import"./path-DyVhHtw_.js";import"./ActivePoints-W2_hwO6R.js";import"./Dot-DGu6gs3Q.js";import"./getRadiusAndStrokeWidthFromDot-C7HQlZ5t.js";import"./useElementOffset-C0MzWZVh.js";import"./uniqBy-BJq_zyLF.js";import"./iteratee-DqoyaVpm.js";import"./Cross-Ci5etOoA.js";import"./Sector-CHPPgs7k.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
