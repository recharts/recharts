import{R as t}from"./iframe-CQZPQf4O.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BXIOSjAZ.js";import{R as l}from"./zIndexSlice-BxTiYWdU.js";import{C as x}from"./ComposedChart-BrH5TOj4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-8qAQxUnM.js";import{L as a}from"./Line-DjUB_QE1.js";import{X as c}from"./XAxis-vMRVH8Ao.js";import{T as g}from"./Tooltip-EX89F-vs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CwpPaPRc.js";import"./Text-FG9LsITf.js";import"./resolveDefaultProps-DgVJwWbR.js";import"./pageBackground-VSL8VAH8.js";import"./isWellBehavedNumber-BVjPIj2C.js";import"./useId-CKB20m-R.js";import"./useBackwardsCompatibleTheme-DinZCZAi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BKLTAFCk.js";import"./index-CHepiqPh.js";import"./index-D3lB8fDF.js";import"./axisSelectors-Or82bYZb.js";import"./throttle-AnGuXVWW.js";import"./d3-scale-Dh160Q_7.js";import"./CartesianAxis-CO8voLuT.js";import"./Layer-C-YS-hE0.js";import"./types-Q9Uebpou.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DwLtgLm9.js";import"./index-CEP5bmmA.js";import"./index-BCncLH8b.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CKHlp-Rt.js";import"./index-XXc_9p_2.js";import"./CartesianChart-BGmWQkFH.js";import"./chartDataContext-BFYg2JX8.js";import"./CategoricalChart-DpdoG3FY.js";import"./activeStyles-CbDR06hO.js";import"./useAnimationId-C5Lal4Ku.js";import"./dataEntryStyles-CEFXctA4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DRkwNU_p.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dx4Ozko3.js";import"./tooltipContext-1FAnzwfo.js";import"./ErrorBarContext-nT97Ooaq.js";import"./GraphicalItemClipPath-BdCokK_0.js";import"./SetGraphicalItem-LkBJ9I3O.js";import"./getZIndexFromUnknown-Qj9yln91.js";import"./useEffectiveDataKey-CCE12RzB.js";import"./omit-DEbRR0Ab.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CEf8Z_wT.js";import"./step-B5PbnVsw.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DDJZk_do.js";import"./Dot-D6DMXsNr.js";import"./getRadiusAndStrokeWidthFromDot-DsehLS7A.js";import"./useElementOffset-CNsQVFGU.js";import"./uniqBy-CT-lLGIP.js";import"./iteratee-rt63w_5K.js";import"./Cross-BVgaSCxL.js";import"./Sector-B8sO8x4j.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
