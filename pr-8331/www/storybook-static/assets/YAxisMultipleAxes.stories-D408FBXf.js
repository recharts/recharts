import{R as t}from"./iframe-CjYP3ojB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Bt-Cr0Xc.js";import{R as l}from"./zIndexSlice-Cy7CLl9Z.js";import{C as x}from"./ComposedChart-Bpv-zdhu.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C1FdboAL.js";import{L as a}from"./Line-COY0vFQs.js";import{X as c}from"./XAxis-Blplutoc.js";import{T as g}from"./Tooltip-CBfzwhg-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKyPqSHv.js";import"./get-CjriyByo.js";import"./Label-CaJS6zCA.js";import"./Text-DjT8udYf.js";import"./ZIndexLayer-BebYx5XY.js";import"./index-Dxgip7sp.js";import"./index-ChIvmNbe.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DdQAYS9z.js";import"./redux-toolkit.esm-DZ87n3n2.js";import"./axisSelectors-CPJSjERY.js";import"./diverging-HdrCxTIi.js";import"./CartesianAxis-5Yui6JuQ.js";import"./Layer-BI-kTcme.js";import"./types-D4qLdpQF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CI60Ea5b.js";import"./index-cwlxkqz2.js";import"./index-CvkAYdqK.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-UTu-k1rT.js";import"./index-CpZXho2T.js";import"./fillDefinitions-BUdB36JD.js";import"./CartesianChart-C5nFTC9G.js";import"./chartDataContext-ksA5CmmE.js";import"./CategoricalChart-zTEQjMMp.js";import"./dataEntryStyles-BvceDOIn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cr5lBSuf.js";import"./useAnimationId-C3slNkW8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DicChUyh.js";import"./tooltipContext-Dqdg2Lnr.js";import"./ErrorBarContext-DD39jyt1.js";import"./activeStyles-D9A5DeQH.js";import"./SetGraphicalItem-B_iWrnd9.js";import"./getZIndexFromUnknown-XpsYo-5r.js";import"./useEffectiveDataKey-BSYT-tLD.js";import"./omit-DxBE6dV-.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-C_KRSABn.js";import"./Curve-CNaKNyZA.js";import"./step-BZQ3UPaP.js";import"./path-BBMZd4YL.js";import"./ActivePoints-D4hUXiIf.js";import"./Dot-BzVdtL2Q.js";import"./Symbols-CAjbkOs6.js";import"./symbol-Lqckysps.js";import"./getUniqPayload-DT0aDQpX.js";import"./uniqBy-Bdlm7mbE.js";import"./iteratee-DlQmRZQR.js";import"./Cross-osWFHJZ7.js";import"./Sector-CL89JWyI.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
