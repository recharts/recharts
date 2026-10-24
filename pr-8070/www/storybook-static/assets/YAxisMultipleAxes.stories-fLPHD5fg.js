import{R as t}from"./iframe-DIZ3O37q.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DKMrz6bp.js";import{R as l}from"./zIndexSlice-BQzkuVGb.js";import{C as x}from"./ComposedChart-D39bvl9W.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BTuM_D30.js";import{L as a}from"./Line-DtDR1pHd.js";import{X as c}from"./XAxis-B7HByjhZ.js";import{T as g}from"./Tooltip-DcLqp7mQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BKiGyQaq.js";import"./Text-CxShOurV.js";import"./resolveDefaultProps-CZ7A5O_B.js";import"./pageBackground-RtZmpZCV.js";import"./isWellBehavedNumber-C03WQupV.js";import"./useId-JbG4rdAV.js";import"./useBackwardsCompatibleTheme-BOuG0K82.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpnduxRR.js";import"./index-v0zH_vno.js";import"./index-eN1sdWPw.js";import"./dataEntryStyles-DEoRHL3P.js";import"./axisSelectors-CgxEqo8X.js";import"./throttle-CmJg4BXK.js";import"./d3-scale-BsLoKPkH.js";import"./CartesianAxis-DyfvpSiZ.js";import"./Layer-dog9ZdZ9.js";import"./types-DIw8xebl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dPbGmcjH.js";import"./index-Cmvub_uM.js";import"./index-ywKEni0y.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DCqN-I2W.js";import"./index-DJHqlgJe.js";import"./CartesianChart-BArvePMg.js";import"./chartDataContext-DHk2uxah.js";import"./CategoricalChart-C-yl_Evz.js";import"./activeStyles-heSOU5tv.js";import"./useAnimationId-1Ju_H0cm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CN_u7Ffv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CU9aD14w.js";import"./tooltipContext-BsZQFKFL.js";import"./RegisterGraphicalItemId-CU20DwEk.js";import"./ErrorBarContext-ttnhO46D.js";import"./SetGraphicalItem-BH1Y0jBy.js";import"./getZIndexFromUnknown-BwBDoaYK.js";import"./useEffectiveDataKey-CsQCtOFi.js";import"./omit-DJK5XhUl.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BKoNYh1Q.js";import"./step-Bx5ie7RH.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CKzWXL41.js";import"./Dot-CFyjFdrS.js";import"./getRadiusAndStrokeWidthFromDot-DM7-yOyB.js";import"./useElementOffset-BA2R_9BV.js";import"./uniqBy-CLXI3ykK.js";import"./iteratee-BTyFVxv_.js";import"./Cross-C52amwue.js";import"./Sector-J0pHaKij.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
