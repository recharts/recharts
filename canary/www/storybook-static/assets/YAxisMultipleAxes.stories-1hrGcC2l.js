import{R as t}from"./iframe-BppzjNnb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DsoUE30k.js";import{R as l}from"./zIndexSlice-Bz25ueAP.js";import{C as x}from"./ComposedChart-DhR9pH6Q.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C0Zr2hdZ.js";import{L as a}from"./Line-DXBTQPhH.js";import{X as c}from"./XAxis-C5D711PO.js";import{T as g}from"./Tooltip-Ya19WNi9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BADN9FM0.js";import"./CartesianAxis-DwkD9703.js";import"./Layer-InP7nrar.js";import"./resolveDefaultProps-DWEEC0T7.js";import"./Text-YWAIgGvz.js";import"./DOMUtils-CKoiYbaH.js";import"./isWellBehavedNumber-C8JMlk1c.js";import"./Label-mqH-rpXP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-vT85rwTx.js";import"./index-C65TBMtY.js";import"./index-G9uqktgG.js";import"./types-CY6jhn9K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DTii-kcm.js";import"./immer-BMUlrvOK.js";import"./RechartsWrapper-BctTvK_s.js";import"./index-BbKylj6c.js";import"./index-e2oR9ZSK.js";import"./axisSelectors-W078EOTn.js";import"./d3-scale-CWnXAf3z.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DAZ3YXd0.js";import"./chartDataContext-C-pJrkOs.js";import"./CategoricalChart-CXNjM0Ue.js";import"./tooltipContext-ycv3szzX.js";import"./AnimatedItems-ClsYQppB.js";import"./useAnimationId-CFK7zTSZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFXd9BK5.js";import"./ActiveShapeUtils-BLIRe5G7.js";import"./RegisterGraphicalItemId-B42PFFZO.js";import"./ErrorBarContext-DT0m-eV5.js";import"./GraphicalItemClipPath-C_3x93JD.js";import"./SetGraphicalItem-DoX9EqUs.js";import"./getZIndexFromUnknown-CkpPg-9d.js";import"./graphicalItemSelectors-BOPKrx09.js";import"./Curve-WhS8CD1Y.js";import"./step-DI4lIq9s.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bg1sxNgn.js";import"./Dot-DL7hVzu-.js";import"./getRadiusAndStrokeWidthFromDot-BbbBTUy4.js";import"./useElementOffset-BHylbXnP.js";import"./uniqBy-BmI5nKZU.js";import"./iteratee-Cj4c1lFv.js";import"./Cross-zS2EhUi7.js";import"./Sector-C2TQ2tDr.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
