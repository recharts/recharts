import{R as t}from"./iframe-BUBMop56.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CNB6NWqV.js";import{R as l}from"./zIndexSlice-BFOCeNjP.js";import{C as x}from"./ComposedChart-Co9cxOOG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-KXwSOlzf.js";import{L as a}from"./Line-ChQucypc.js";import{X as c}from"./XAxis-Beu0D676.js";import{T as g}from"./Tooltip-DD2mCsuY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DqkvNHf2.js";import"./Layer-CEgjWxAQ.js";import"./resolveDefaultProps-C_KdVhp0.js";import"./Text-DL-t9yLw.js";import"./DOMUtils-Bej4Btff.js";import"./isWellBehavedNumber-CCPoxx8d.js";import"./Label-C8PySNEK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BKbyZAtu.js";import"./index-CySDvqVz.js";import"./index-CgGvCayo.js";import"./types-CIINUjJb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BpqvL_BB.js";import"./throttle-D75nL504.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DIZMbcTA.js";import"./index-D9WH3_pB.js";import"./index-CYnUHsqF.js";import"./axisSelectors-CCSlXmRc.js";import"./d3-scale-BKS6cnWE.js";import"./CartesianChart-BmaucleZ.js";import"./chartDataContext-BpFZdk1W.js";import"./CategoricalChart-a6ycapdr.js";import"./tooltipContext-Deo-eeEQ.js";import"./AnimatedItems-T6oPSFaY.js";import"./useAnimationId-BjgoYA5x.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2jqxTYu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dow-vWc_.js";import"./RegisterGraphicalItemId-BChVYVcH.js";import"./ErrorBarContext-D15ZYdOL.js";import"./GraphicalItemClipPath-0CoE9plv.js";import"./SetGraphicalItem-DM6DkeHR.js";import"./getZIndexFromUnknown-CmtAqjSf.js";import"./graphicalItemSelectors-BFcZn4ra.js";import"./Curve-B8ZzY9nf.js";import"./step-nlwLlUk8.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DFwLh6HZ.js";import"./Dot-3ZhUHudT.js";import"./getRadiusAndStrokeWidthFromDot-BMrKZbwO.js";import"./useElementOffset-Bc8UoZ8e.js";import"./uniqBy-GaWKKGJl.js";import"./iteratee-oR2_Mtz0.js";import"./Cross-_pUABBbK.js";import"./Sector-DvaIwhue.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
