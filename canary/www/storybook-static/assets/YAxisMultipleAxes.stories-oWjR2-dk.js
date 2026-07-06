import{R as t}from"./iframe-DILeTPtB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CISpCaOe.js";import{R as l}from"./zIndexSlice-JhTumx9T.js";import{C as x}from"./ComposedChart-BoZ_CD1T.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CE9OfDRf.js";import{L as a}from"./Line-Dvb0PByu.js";import{X as c}from"./XAxis-Bwnro3mN.js";import{T as g}from"./Tooltip-DCCDzLC0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-sqhBuaGO.js";import"./Layer-DqGeYGqQ.js";import"./resolveDefaultProps--lUhC_MY.js";import"./Text-DNGNK59q.js";import"./DOMUtils-_37cMB0k.js";import"./isWellBehavedNumber-OeMbA9Vy.js";import"./Label-RUjb4LlC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKm5_jWO.js";import"./index-NDv3w53H.js";import"./index-CUbE2YyD.js";import"./types-0cBFLGxq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ds2fOQ5P.js";import"./throttle-CSfx3U2Q.js";import"./RechartsWrapper-CzFpnRvL.js";import"./index-Bb_kPu6Y.js";import"./index-CID3BdEk.js";import"./axisSelectors-BJN0i2Z4.js";import"./d3-scale-C6hgYXhG.js";import"./CartesianChart-CU1CulZs.js";import"./chartDataContext-BAm5Wg7P.js";import"./CategoricalChart-ChRNm6Kp.js";import"./tooltipContext-uEhilrfe.js";import"./AnimatedItems-BB2N4cgm.js";import"./useAnimationId-oe-1YumM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6-5Ey9v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CEry7zbZ.js";import"./RegisterGraphicalItemId-CxyqVt25.js";import"./ErrorBarContext-Bk5mas5-.js";import"./GraphicalItemClipPath-ElTOcYVI.js";import"./SetGraphicalItem-DVaXC3-E.js";import"./getZIndexFromUnknown-Cc5tBnWV.js";import"./graphicalItemSelectors-DfWYsBhB.js";import"./Curve-BAtIGC1F.js";import"./step-DZcEBBZm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BZxYxGPD.js";import"./Dot-j0bVABcw.js";import"./getRadiusAndStrokeWidthFromDot-Cp2-QPpj.js";import"./useElementOffset-CqP9UHOF.js";import"./uniqBy-AzisH7Oj.js";import"./iteratee-CzwrkfQ7.js";import"./Cross-ne17vnNJ.js";import"./Sector-C8V5mkCQ.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
