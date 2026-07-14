import{R as t}from"./iframe-n-wQuCBi.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-bBYdAORl.js";import{R as l}from"./zIndexSlice-agpgazdg.js";import{C as x}from"./ComposedChart-QtT3UbV6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CmJr5hnB.js";import{L as a}from"./Line-_0667e52.js";import{X as c}from"./XAxis-CqwZgwEA.js";import{T as g}from"./Tooltip-CArPWmfs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BKtFBsNE.js";import"./Layer-q34S3x6j.js";import"./resolveDefaultProps-DQgAjYOa.js";import"./Text-Cnp2kl38.js";import"./DOMUtils-B9ZjPicg.js";import"./isWellBehavedNumber-C5T5W5WV.js";import"./Label-1gu4eHha.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CKoiASff.js";import"./index-B670uwrn.js";import"./index-LEpyJ3u4.js";import"./types-DiIuPkat.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DRvXNutS.js";import"./throttle-DNZjDlXp.js";import"./RechartsWrapper--hZNEqf5.js";import"./index-Bp8i3QLZ.js";import"./index-ifJ0vXzc.js";import"./axisSelectors-DJGA74tj.js";import"./d3-scale-Dq3pQP3q.js";import"./CartesianChart-D1BnCtWc.js";import"./chartDataContext-BUwB3ubO.js";import"./CategoricalChart-Bn54rxv3.js";import"./tooltipContext-DqIERWOr.js";import"./AnimatedItems-CukHfitT.js";import"./useAnimationId-CnnOw5XR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CrC21nkp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_ggCq42.js";import"./RegisterGraphicalItemId-DirXNoHy.js";import"./ErrorBarContext-Dm_7tkVC.js";import"./GraphicalItemClipPath-NXqqiVYJ.js";import"./SetGraphicalItem-jej3rFoE.js";import"./getZIndexFromUnknown-CbHOUsb5.js";import"./graphicalItemSelectors-D5_1BCSw.js";import"./Curve-DeDi9IqD.js";import"./step-Cdwz2fUu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-3GB3c-YC.js";import"./Dot-B6zDcllv.js";import"./getRadiusAndStrokeWidthFromDot-BrX-hwFD.js";import"./useElementOffset-Dbda4rug.js";import"./uniqBy-CtExDG4G.js";import"./iteratee-7MnTZri1.js";import"./Cross-B2HFXlv9.js";import"./Sector-B5UKPU85.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
