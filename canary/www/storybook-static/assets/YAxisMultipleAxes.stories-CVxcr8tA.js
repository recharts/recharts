import{c as t}from"./iframe-Bw01G05S.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-leBvxI0P.js";import{g as l}from"./zIndexSlice-BVJPDscV.js";import{C as x}from"./ComposedChart-DiZxKxJ7.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-BBTxmDb6.js";import{L as a}from"./Line-Z8smfELB.js";import{X as A}from"./XAxis-TrLbUf6y.js";import{T as g}from"./Tooltip-CsILSo3O.js";import"./preload-helper-Dp1pzeXC.js";import"./get-PLF287kI.js";import"./CartesianAxis-D2bv38Ox.js";import"./Layer-_mE6wvdm.js";import"./resolveDefaultProps-BX9yAQwT.js";import"./Text-qrCQLdvB.js";import"./DOMUtils-CB0xgJC5.js";import"./isWellBehavedNumber-BdaQsoH1.js";import"./Label-0YWOaiFB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CUHrFVWb.js";import"./index-CpLIt3E_.js";import"./index-gPPvxt9l.js";import"./types-BkmoQN99.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BSWqpX2F.js";import"./immer-vKd3rXCH.js";import"./RechartsWrapper-Dy3I_vud.js";import"./index-ChbgLzNl.js";import"./index-CnqP2OOu.js";import"./axisSelectors-CYrXIzpV.js";import"./d3-scale-C81Lq6p_.js";import"./CartesianChart-CmfxvnV2.js";import"./chartDataContext-DTGe0ZBk.js";import"./CategoricalChart-CJ_zmDdd.js";import"./tooltipContext-C-8soueH.js";import"./ReactUtils-CPtpn3OS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFTblrQi.js";import"./useAnimationId-DfklYMDy.js";import"./ActiveShapeUtils-ChrAkVLT.js";import"./RegisterGraphicalItemId-C6zAsVLj.js";import"./ErrorBarContext-DD6wo7ll.js";import"./GraphicalItemClipPath-Cn2vbNRH.js";import"./SetGraphicalItem-CbgDA4Hu.js";import"./getZIndexFromUnknown-CMgdLsbe.js";import"./graphicalItemSelectors-D7Bbklzs.js";import"./Curve-CGu0Zh8a.js";import"./step-Ci-i76rd.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CLH-5Llk.js";import"./Dot-KFQGNzLM.js";import"./getRadiusAndStrokeWidthFromDot-B2Lc250a.js";import"./useElementOffset-BJf-bgFc.js";import"./uniqBy-CJKAqM1m.js";import"./iteratee-CJNbtgLs.js";import"./Cross-8GydS8Lz.js";import"./Sector-_FqA8Q5K.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
