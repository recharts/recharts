import{R as t}from"./iframe-02jumC35.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-mNI4SsbU.js";import{R as l}from"./zIndexSlice-Dh2CbWTc.js";import{C as x}from"./ComposedChart-R_fgljAr.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DsXmJiTW.js";import{L as a}from"./Line-qAcnYglM.js";import{X as c}from"./XAxis-CnRK3wsv.js";import{T as g}from"./Tooltip-lonz9YP2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DdA7iutk.js";import"./Text-CUWOvwAb.js";import"./resolveDefaultProps-BsN5ISV3.js";import"./pageBackground-hJZbYU9A.js";import"./isWellBehavedNumber-Bh9Ud_H9.js";import"./useId-QUVye4Jg.js";import"./useBackwardsCompatibleTheme-WAtXE9gt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Usgx4vbu.js";import"./index-CYmUsGYv.js";import"./index-rCxfu9Lu.js";import"./dataEntryStyles-B_KbhbaV.js";import"./axisSelectors-M7ebD7ER.js";import"./throttle-C3YzeAkV.js";import"./d3-scale-cjemRmDN.js";import"./CartesianAxis-BreAXyHF.js";import"./Layer-BluUqzQG.js";import"./types-BU7rhtDT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DSmyYzjS.js";import"./index-DIJUc9fc.js";import"./index-CDDoEg3V.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ClpzkpkH.js";import"./index-3m7_l-7v.js";import"./CartesianChart-Cmtw3EH1.js";import"./chartDataContext-DXKdIbz5.js";import"./CategoricalChart-2aphxpDk.js";import"./activeStyles-BV4ZXPNg.js";import"./useAnimationId-BlDuhaIC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tsu_f_5l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJWo4eBA.js";import"./tooltipContext-CKevtMBv.js";import"./RegisterGraphicalItemId-C0Bo0Cv1.js";import"./ErrorBarContext-DP5SPbAE.js";import"./SetGraphicalItem-CYjreQQF.js";import"./getZIndexFromUnknown-B_k9-Flt.js";import"./useEffectiveDataKey-C4Vtw6Mo.js";import"./omit-CaKZlrh-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-sD1K-_o7.js";import"./step-DZxAeMnC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-p_qQIX4t.js";import"./Dot-DmS4t6aH.js";import"./getRadiusAndStrokeWidthFromDot-C-prUT-T.js";import"./useElementOffset-CDDOtZbO.js";import"./uniqBy-BgoixCH6.js";import"./iteratee-8yTmLCe3.js";import"./Cross-7liUWqsX.js";import"./Sector-DJKjfNoO.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
