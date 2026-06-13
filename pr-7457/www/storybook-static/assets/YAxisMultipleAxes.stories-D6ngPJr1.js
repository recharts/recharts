import{R as t}from"./iframe-ii_SdKaT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B_AHmNwM.js";import{R as l}from"./zIndexSlice-CewrGiZi.js";import{C as x}from"./ComposedChart-BqK8fMbF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CG5WCWwE.js";import{L as a}from"./Line-BCh4BadY.js";import{X as c}from"./XAxis-n_W7ptOo.js";import{T as g}from"./Tooltip-CnFF0eY_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-IlujCcRJ.js";import"./CartesianAxis-C12Pbczw.js";import"./Layer-1o6wJcjz.js";import"./resolveDefaultProps-DmtqLCBR.js";import"./Text-D6jUUcir.js";import"./DOMUtils-CspLYEuU.js";import"./isWellBehavedNumber-Bl4DTDWz.js";import"./Label-CWAFalVX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C_pljZlN.js";import"./index-CipO9bHT.js";import"./index-C9rA4SBW.js";import"./types-CROtPh6T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-6QIQv7lN.js";import"./immer-BRK5VplU.js";import"./RechartsWrapper-BJ7nVo9I.js";import"./index-CoHu65TP.js";import"./index-BWUxHoQX.js";import"./axisSelectors-BEJlbTgh.js";import"./d3-scale-DqldvK9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-hQrjvxNc.js";import"./chartDataContext-WEDyGrAX.js";import"./CategoricalChart-BC-K0qUt.js";import"./tooltipContext-BgC5UDk8.js";import"./AnimatedItems-Ddier9mI.js";import"./useAnimationId-DETjp9PR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DzvlK_vY.js";import"./ActiveShapeUtils-_FaeFiVy.js";import"./RegisterGraphicalItemId-Bd8rL4_6.js";import"./ErrorBarContext-BbBngZhz.js";import"./GraphicalItemClipPath-BIR1mLdK.js";import"./SetGraphicalItem-Ke19tpjU.js";import"./getZIndexFromUnknown-BXc2GGi4.js";import"./graphicalItemSelectors-BvscI3Fb.js";import"./Curve-CvjftyU5.js";import"./step-CynPry_M.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DUYbyaX_.js";import"./Dot-D93Ls2Za.js";import"./getRadiusAndStrokeWidthFromDot-ouGtJSmE.js";import"./useElementOffset-tGPEXiEv.js";import"./uniqBy--oKwp8uZ.js";import"./iteratee-DMX-jnSx.js";import"./Cross-Fj8WcxtO.js";import"./Sector-CCDTIu2s.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
