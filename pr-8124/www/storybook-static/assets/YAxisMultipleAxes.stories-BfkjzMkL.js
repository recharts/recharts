import{R as t}from"./iframe-C_yGAyrl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-lwhG3-Lu.js";import{R as l}from"./zIndexSlice-BJ-JuQhh.js";import{C as x}from"./ComposedChart-CFLgoo8z.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CLFeXbE0.js";import{L as a}from"./Line-LkXq5rRh.js";import{X as c}from"./XAxis-BCyVXA2-.js";import{T as g}from"./Tooltip-BgjOqcDA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BnQGI-qv.js";import"./Text-DzacdUSY.js";import"./resolveDefaultProps-B8DgtWv7.js";import"./DOMUtils-DAgrf4y-.js";import"./ZIndexLayer-B7Tlmy9n.js";import"./index-DrbolqVI.js";import"./index-ddpbYnm-.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ut8KXzAo.js";import"./throttle-BAXAw3D6.js";import"./axisSelectors-5FYthY9Y.js";import"./d3-scale-PQcr3dQu.js";import"./CartesianAxis-DMLFVqxV.js";import"./Layer-DRwTYvg4.js";import"./types-Cxyr58RE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DkVAJH0_.js";import"./index-C36DrKNt.js";import"./index-RS1OPqlJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BSGXC4_F.js";import"./index-ClVDXgD6.js";import"./CartesianChart-CokpCbyl.js";import"./ZIndexPortal-BbHy9i_X.js";import"./CategoricalChart-vhidTTy9.js";import"./LabelList-o4uUgS5K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DTDM3K3u.js";import"./useAnimationId-HAfaQzyp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHVm68Z9.js";import"./tooltipContext-CJMN-mb7.js";import"./dataEntryStyles-DACXFNb8.js";import"./ErrorBarContext-BFE3xm4o.js";import"./activeStyles-B0RsKEFJ.js";import"./SetGraphicalItem-ByCBXbFB.js";import"./getZIndexFromUnknown-7pUA36BO.js";import"./useEffectiveDataKey-DU6lMzAC.js";import"./fillDefinitions-BmGKFoo3.js";import"./omit-DF37_2xs.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B5j0Jet-.js";import"./step-DDESiMvu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CjSi-VTr.js";import"./Dot-M2gDFPx3.js";import"./Symbols-Bbax-3ST.js";import"./symbol-CWSoe6BS.js";import"./getRadiusAndStrokeWidthFromDot-COLPDuwt.js";import"./useElementOffset-DY-j2w8T.js";import"./uniqBy-CNLZexsa.js";import"./iteratee-DpnVvTvv.js";import"./Cross-BxffN38R.js";import"./Sector-RfhLxL-9.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
