import{R as t}from"./iframe-Dlbg_GZB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-K45jOkJG.js";import{R as l}from"./zIndexSlice-CMn4Cwlm.js";import{C as x}from"./ComposedChart-BqgVwKSR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BeXlCBS6.js";import{L as a}from"./Line-BpbqzpNB.js";import{X as c}from"./XAxis-g3Yqs_q0.js";import{T as g}from"./Tooltip-DcxPDA9e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-dbSJQeo2.js";import"./Layer-DlhGxg7N.js";import"./resolveDefaultProps-CIJSTnSl.js";import"./Text-BLnCmUHB.js";import"./DOMUtils-vSgsVfRP.js";import"./isWellBehavedNumber-BSYl2eep.js";import"./Label-d3wc6rF5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-feAlcx_0.js";import"./index-CFtDWJsT.js";import"./index-C4pT71Bv.js";import"./types-Ctdv5TaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CsfsF6Cn.js";import"./throttle-C3Y4hQMj.js";import"./RechartsWrapper-_RHeF5kh.js";import"./index-5rk_KAjc.js";import"./index-De4F06zW.js";import"./axisSelectors-C_hiMAlk.js";import"./d3-scale-DJYjYDtT.js";import"./CartesianChart-DHiwjDYa.js";import"./chartDataContext-MC8Fu7xC.js";import"./CategoricalChart-BQo9vmvV.js";import"./tooltipContext-DM-EFah7.js";import"./AnimatedItems-xmicP7QL.js";import"./useAnimationId-K2Oa5cBe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRztim86.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BApyZjjc.js";import"./RegisterGraphicalItemId-Dj61QivB.js";import"./ErrorBarContext-BKnwTpIO.js";import"./GraphicalItemClipPath-8DGGiF_D.js";import"./SetGraphicalItem-jqk9vogH.js";import"./getZIndexFromUnknown-DeLKnrFD.js";import"./graphicalItemSelectors-Bb2tv3Tj.js";import"./Curve-Dcq__Vxv.js";import"./step-BcjH0w06.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CEnLoFiW.js";import"./Dot-DZ8iWzlt.js";import"./getRadiusAndStrokeWidthFromDot-rZ7RT_fb.js";import"./useElementOffset-CDDZoyN1.js";import"./uniqBy-DQCU_Q9Y.js";import"./iteratee-CC9cIx0G.js";import"./Cross-CxODRasK.js";import"./Sector-trkJxZEY.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
