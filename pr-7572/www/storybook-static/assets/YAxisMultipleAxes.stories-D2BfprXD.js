import{R as t}from"./iframe-prgBh1Qf.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CBYYm0_0.js";import{R as l}from"./zIndexSlice-DdjKeJcD.js";import{C as x}from"./ComposedChart-ExGsHaJW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CCjA1KKG.js";import{L as a}from"./Line-CWtP-uQX.js";import{X as c}from"./XAxis-BWvJnYnv.js";import{T as g}from"./Tooltip-Dv51Ni96.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DyI7y6fg.js";import"./Layer-B4SceqN1.js";import"./resolveDefaultProps-DEZlg4EB.js";import"./Text-XjkeXE_1.js";import"./DOMUtils-B922snu2.js";import"./isWellBehavedNumber-DeolLGU-.js";import"./Label-CpgdF2bt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Coay8-vh.js";import"./index-Bl_8pcbE.js";import"./index-DznvQCe0.js";import"./types-BLB4Kpk-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3Oo4Aw2.js";import"./throttle-DhCsYq_l.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-FIpEFVMR.js";import"./index-TRfcR2ow.js";import"./index-p6BXHd-9.js";import"./axisSelectors-HShZFAmb.js";import"./d3-scale-CthO7aNE.js";import"./CartesianChart-EDRdBXz4.js";import"./chartDataContext-BRCxcd-D.js";import"./CategoricalChart-C0JPuI-j.js";import"./tooltipContext-44zxrOu4.js";import"./AnimatedItems-JyKHnHqe.js";import"./useAnimationId-Dho-yl2L.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CHjX_Wi4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCY3sSOl.js";import"./RegisterGraphicalItemId-QOUSEuOJ.js";import"./ErrorBarContext-_HsKWF8T.js";import"./GraphicalItemClipPath-D8U1RFPj.js";import"./SetGraphicalItem-cAeJSBXs.js";import"./getZIndexFromUnknown-DBxTf_kG.js";import"./graphicalItemSelectors-DU6HXrJ0.js";import"./Curve-Dg6pMiMi.js";import"./step-DljApQAs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C6psJDBD.js";import"./Dot-BOonALeI.js";import"./getRadiusAndStrokeWidthFromDot-BYQTLLCN.js";import"./useElementOffset-Dz4nWuBf.js";import"./uniqBy-B9Vyigvh.js";import"./iteratee-rSndqGt-.js";import"./Cross-CjrGhwPB.js";import"./Sector-G3Ely8-T.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
