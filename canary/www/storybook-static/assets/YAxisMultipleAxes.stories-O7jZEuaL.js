import{R as t}from"./iframe-BPne-Hl-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C0fNq5VI.js";import{R as l}from"./zIndexSlice-Vbxajxxh.js";import{C as x}from"./ComposedChart-J8Blu4CC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CI1QvEA0.js";import{L as a}from"./Line-BF3gtbV4.js";import{X as c}from"./XAxis-rRwDqEnY.js";import{T as g}from"./Tooltip-9yXvT-wW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BrzCwn25.js";import"./Text-C95v_Vb1.js";import"./resolveDefaultProps-DDnfF8y9.js";import"./DOMUtils-J3bqy14P.js";import"./isWellBehavedNumber-Ct771fgh.js";import"./useBackwardsCompatibleTheme-CL2xpGGY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DfzxMoSO.js";import"./index-uv_fcL6C.js";import"./index-CwJJwB5T.js";import"./RechartsWrapper-D7wPyuzK.js";import"./index-B-eC6RsS.js";import"./index-CxrNEW2y.js";import"./throttle-Bi_zW3_L.js";import"./axisSelectors-LTfENhRo.js";import"./d3-scale-DOpYrlme.js";import"./renderedTicksSlice-DT6TytRZ.js";import"./CartesianAxis-ClYaFBOz.js";import"./Layer-SpL-rjyd.js";import"./types-BUNHJ5Kw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-QFuu_jnw.js";import"./chartDataContext-BudnyF2r.js";import"./CategoricalChart-DWAFRQOx.js";import"./tooltipContext-CsucA5SQ.js";import"./AnimatedItems-BPcfKqDa.js";import"./useAnimationId-Bq5h4Na4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cn7G2-_l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-IyyDIcQz.js";import"./RegisterGraphicalItemId-DLHR3ZEz.js";import"./ErrorBarContext-DTKdWH8V.js";import"./GraphicalItemClipPath-pLYwGWiU.js";import"./SetGraphicalItem-DdmyrxA9.js";import"./getZIndexFromUnknown-Cb39raE3.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Bnvdlidl.js";import"./Curve-DxMSvAJ7.js";import"./step-BuUE8tSH.js";import"./path-DyVhHtw_.js";import"./ActivePoints-vna83Vpl.js";import"./Dot-_aT20vJp.js";import"./getRadiusAndStrokeWidthFromDot-DdxPvC-_.js";import"./useElementOffset-dphqCukD.js";import"./uniqBy-B3LW5wu3.js";import"./iteratee-DPXVHfHy.js";import"./Cross-D0wtR-3X.js";import"./Sector-DtWXAxPH.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
