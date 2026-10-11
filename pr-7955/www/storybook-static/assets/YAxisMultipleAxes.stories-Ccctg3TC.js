import{R as t}from"./iframe-CwCc9vh-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-5QleAohG.js";import{R as l}from"./zIndexSlice-Cze2qQ6L.js";import{C as x}from"./ComposedChart-CBS_Pqtt.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cr7WvPtc.js";import{L as a}from"./Line-B99RZhj7.js";import{X as c}from"./XAxis-Ck9YwMSg.js";import{T as g}from"./Tooltip-SSRdF5XD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BR9Px2Ae.js";import"./Text-BJucpPtg.js";import"./resolveDefaultProps-C0sTGtoa.js";import"./pageBackground-BpRJwl3U.js";import"./isWellBehavedNumber-C8Zfj1Nz.js";import"./useId-DJcNFVPz.js";import"./useBackwardsCompatibleTheme-pKoGpidZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DyEPtPYc.js";import"./index-iNTF2uXo.js";import"./index-DH3c4tMg.js";import"./axisSelectors-CpT7QqC8.js";import"./throttle-_lHGrg8X.js";import"./d3-scale-QIRFRCXO.js";import"./CartesianAxis-DXF_4xE6.js";import"./Layer-DOFh0lwh.js";import"./types-CQwCfrQn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BhImPZzn.js";import"./index-CI9Eu4p_.js";import"./index-BLCS5Ged.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BJt_1m2P.js";import"./index-DQ_TsVb-.js";import"./CartesianChart-BLB-Ua7j.js";import"./chartDataContext-DHHqBQtJ.js";import"./CategoricalChart-a-9gkYtz.js";import"./activeStyles-PzRACl7b.js";import"./useAnimationId-DnYkrRJp.js";import"./dataEntryStyles-YnhjRNXA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2tapUkb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BUtkHcUW.js";import"./tooltipContext-BlYB0tYR.js";import"./ErrorBarContext-B0-6gfmu.js";import"./GraphicalItemClipPath-DVsVu3E2.js";import"./SetGraphicalItem-0C32PbV4.js";import"./getZIndexFromUnknown-DJOVpQrD.js";import"./useEffectiveDataKey-CMqBM7fj.js";import"./Curve-nSJilM-Q.js";import"./step-njiuEB0s.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CX_PcgP1.js";import"./Dot-CD_kBVmM.js";import"./getRadiusAndStrokeWidthFromDot-LnlHxG9T.js";import"./useElementOffset-Ywty36ho.js";import"./uniqBy-DTquvHLz.js";import"./iteratee-mrtzC2yj.js";import"./Cross-P1dyhGNf.js";import"./Sector-BTBp3A0f.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
