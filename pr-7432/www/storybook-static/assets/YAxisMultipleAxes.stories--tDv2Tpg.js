import{R as t}from"./iframe-QMSevZ_Z.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CX1GPX_T.js";import{R as l}from"./zIndexSlice-CqmMHsGQ.js";import{C as x}from"./ComposedChart-BanYSBKC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DIAZY5dc.js";import{L as a}from"./Line-1jaGMewt.js";import{X as c}from"./XAxis-C0cN_JCK.js";import{T as g}from"./Tooltip-DrpUXz1E.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dt9ZBUsD.js";import"./CartesianAxis-fxCqdamK.js";import"./Layer-BIlvUco-.js";import"./resolveDefaultProps-D1-FsOZY.js";import"./Text-B1kcN_-d.js";import"./DOMUtils-B2SIzhm8.js";import"./isWellBehavedNumber-BPQ0SJ_C.js";import"./Label-CDZiRvSt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CEBsGFM8.js";import"./index-BO7EkBYF.js";import"./index-LDm5_5xU.js";import"./types-P1jJ2pmT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C-zK2PEt.js";import"./immer-CSWl79hr.js";import"./RechartsWrapper-DMF7GIN4.js";import"./index-CIER62SJ.js";import"./index-pi0GgTlW.js";import"./axisSelectors-ClPssgYV.js";import"./d3-scale-BdG0BwVM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Cs7lfMyS.js";import"./chartDataContext-CxmQ7H3R.js";import"./CategoricalChart-Euguz-0O.js";import"./tooltipContext-BaJfxc5d.js";import"./AnimatedItems-BDsdaMkZ.js";import"./useAnimationId-DlcOUKTA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lJXzMoVm.js";import"./ActiveShapeUtils-Bwe4ExnQ.js";import"./RegisterGraphicalItemId-YPLe9nYm.js";import"./ErrorBarContext-CmLe_bSh.js";import"./GraphicalItemClipPath-D6ZPyI0A.js";import"./SetGraphicalItem-CL5I6sew.js";import"./getZIndexFromUnknown-CL3JCHGf.js";import"./graphicalItemSelectors-risRb6qe.js";import"./Curve-YfzASo2H.js";import"./step-CM1NK0SI.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DxJpOWHz.js";import"./Dot-HKvUxCmw.js";import"./getRadiusAndStrokeWidthFromDot-ClQ6U8mJ.js";import"./useElementOffset-D_J7pSVP.js";import"./uniqBy-U_isDGby.js";import"./iteratee-DR35FRfo.js";import"./Cross-iS5fVb9V.js";import"./Sector-p75iSGMp.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
