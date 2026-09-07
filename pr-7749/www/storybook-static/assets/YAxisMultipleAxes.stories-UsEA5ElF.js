import{R as t}from"./iframe-DTRlEa3u.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Ds-oNmVm.js";import{R as l}from"./zIndexSlice-CDXLYYsJ.js";import{C as x}from"./ComposedChart-sAjY7YWJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-GmA7ObGT.js";import{L as a}from"./Line-CgbPcuvG.js";import{X as c}from"./XAxis-C0dwGi3V.js";import{T as g}from"./Tooltip-DkkZSB2g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CwRVD2C4.js";import"./Text-BwGttioZ.js";import"./resolveDefaultProps-BJzTCoJ3.js";import"./DOMUtils-BlPhfohB.js";import"./isWellBehavedNumber-BJiDbB8v.js";import"./useId-DA93zQ1i.js";import"./useBackwardsCompatibleTheme-Tyqh7EHZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B42FtzLK.js";import"./index-CS48B7tj.js";import"./index-o_WhDpRH.js";import"./RechartsWrapper-BBFKLgiK.js";import"./axisSelectors-DdPePiMV.js";import"./throttle-D6N_0nid.js";import"./d3-scale-5lZtxq-z.js";import"./index-CpmklETy.js";import"./index-Cvz-VVDw.js";import"./renderedTicksSlice-CMohq2ew.js";import"./index-BE7ByIQm.js";import"./CartesianAxis-CKsN-hMj.js";import"./Layer-Cxb9aykb.js";import"./types-BPUiziHz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C0fRKmIL.js";import"./chartDataContext-0lwkG_AO.js";import"./CategoricalChart-Br64IOu-.js";import"./AnimatedItems-D3NTNo-L.js";import"./useAnimationId-BQWcd1jo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DwF3_6Yk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0NSyvuwL.js";import"./tooltipContext-DfxumADO.js";import"./RegisterGraphicalItemId-NS8Y_EHr.js";import"./ErrorBarContext-B04e9oFc.js";import"./GraphicalItemClipPath-DCT6ZGzY.js";import"./SetGraphicalItem-D-a-mss5.js";import"./getZIndexFromUnknown-BJiZVUJQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CL95YKlR.js";import"./Curve-BqpssSWR.js";import"./step-jNVSHd8N.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DKYwbTj3.js";import"./Dot-Dein_ccS.js";import"./getRadiusAndStrokeWidthFromDot-scqYoR8I.js";import"./useElementOffset-DrFdHzWk.js";import"./uniqBy-C9ZtxYQ4.js";import"./iteratee-BjsuC6vd.js";import"./Cross-UjjRnaQl.js";import"./Sector-BAFgBTSh.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
