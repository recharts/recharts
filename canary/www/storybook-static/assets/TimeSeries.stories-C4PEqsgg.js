import{R as e}from"./iframe-Dkncjqe5.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BAQVI_cg.js";import{R as h}from"./zIndexSlice-3Eut4nle.js";import{C as g}from"./ComposedChart-Dy5YJ26L.js";import{L as x}from"./Line-dCs9wtK9.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D7_DItYV.js";import{T as V}from"./Tooltip-C0BJ45cZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Dwpurh4e.js";import"./Layer-CZ9ZIOVu.js";import"./resolveDefaultProps-DKbDW2P0.js";import"./Text-BwfQxnJz.js";import"./pageBackground-CmllYwCr.js";import"./isWellBehavedNumber-h0zKWQQH.js";import"./useId-ZYm6mEVk.js";import"./useBackwardsCompatibleTheme-BCpg7K4A.js";import"./Label-V2ZN4uKZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaEkt6aU.js";import"./index-DuZYSu8x.js";import"./index-CEbzYCUB.js";import"./types-BHEXbjwq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DBigkG9b.js";import"./throttle-fiJaoKIv.js";import"./index-Bw7gNQT7.js";import"./index-BWQ516bg.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DzgXC3ir.js";import"./RechartsWrapper-BbHdyrKZ.js";import"./index-DULW3GES.js";import"./CartesianChart-_Rd0DLP-.js";import"./chartDataContext-BPkdx2D0.js";import"./CategoricalChart-DpeOMck6.js";import"./Curve-CjcQUAYM.js";import"./step-CArLTb5W.js";import"./path-DyVhHtw_.js";import"./activeStyles-DQuNqkwN.js";import"./useAnimationId-MEfDv_ZE.js";import"./dataEntryStyles-DXfoX1Tx.js";import"./ActivePoints-ClxMx5Mk.js";import"./Dot-sRIGaLzT.js";import"./ErrorBarContext-e-s-GcHB.js";import"./GraphicalItemClipPath-DPL4dOJ-.js";import"./SetGraphicalItem-Bg3q-OfM.js";import"./getRadiusAndStrokeWidthFromDot-eYGtCAeF.js";import"./ActiveShapeUtils-B1bflkee.js";import"./useEffectiveDataKey-CjhYhiH-.js";import"./useElementOffset-y8lH1pNC.js";import"./uniqBy-B0GiVIZ3.js";import"./iteratee-DxR0_ujM.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CPU9vQPK.js";import"./Rectangle-A_cS0CAA.js";import"./util-Dxo8gN5i.js";import"./Sector-DATmQyYx.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
