import{R as t}from"./iframe-COvR6m4y.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BmBZe_s0.js";import{R as l}from"./zIndexSlice-ou7P1k4B.js";import{C as x}from"./ComposedChart-Dhs-HtCT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DFIsKXii.js";import{L as a}from"./Line-A2N_Jj9W.js";import{X as c}from"./XAxis-Dko6EwLt.js";import{T as g}from"./Tooltip-Bs0TNcBq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DL7W3oea.js";import"./Text-CVNPXLFS.js";import"./resolveDefaultProps-Bslp9ftf.js";import"./DOMUtils-CI2tOPO2.js";import"./isWellBehavedNumber-BMFlPjoz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-fZm6clI3.js";import"./index-C-vvr8x7.js";import"./index-FWviPRnN.js";import"./RechartsWrapper-S2j0RMDF.js";import"./index-DaYFSMwi.js";import"./index-BTT3eJrw.js";import"./throttle-CwSdkZJ2.js";import"./renderedTicksSlice-BCt_pLiN.js";import"./axisSelectors-CgZaOuWk.js";import"./d3-scale-BKhMit0q.js";import"./CartesianAxis-BfSFkfBG.js";import"./Layer-BxScpKop.js";import"./types-C40QwNfk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-bMPPd1I7.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B3NTwVXz.js";import"./chartDataContext-BtNlXKIo.js";import"./CategoricalChart-dbTixxWK.js";import"./tooltipContext-D4UQgBaV.js";import"./AnimatedItems-DVdwO1UF.js";import"./useAnimationId-Cb3gVBxS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DqY-vkpx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-crCTkC1S.js";import"./RegisterGraphicalItemId-DqoHzEMf.js";import"./ErrorBarContext-SLrJh98L.js";import"./GraphicalItemClipPath-BFgUMlnl.js";import"./SetGraphicalItem-CQMRhEff.js";import"./getZIndexFromUnknown-CEteNPm3.js";import"./graphicalItemSelectors-BqCxd3oP.js";import"./Curve-C1YATuiv.js";import"./step-CeMcQkHX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BCa4N9Pu.js";import"./Dot-COu3_HTT.js";import"./graphicalItemIdentity-KbS-c8wy.js";import"./useElementOffset-CzVnQFDP.js";import"./uniqBy-Cwho9xkh.js";import"./iteratee-C7AvrAG1.js";import"./Cross-DD1n0aFu.js";import"./Sector-BGs4NfRJ.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
