import{R as e}from"./iframe-DjRBpX_P.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Y0oUf3sW.js";import{R as h}from"./zIndexSlice-iVSWW5BV.js";import{C as g}from"./ComposedChart-CsK6iTFT.js";import{L as x}from"./Line-Cy3PGKP5.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-FJpOhRlp.js";import{T as V}from"./Tooltip-qAbEtBN7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-D3pH7M3P.js";import"./Layer-C9YefTas.js";import"./resolveDefaultProps-BjSk0Y1m.js";import"./Text-yVr7Mz0m.js";import"./pageBackground-GeoRz0Dn.js";import"./isWellBehavedNumber-CpHNoBah.js";import"./useId-BfPQ7TvO.js";import"./useBackwardsCompatibleTheme-C4WhBG8E.js";import"./Label-CnRbgzX5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dbtf4y40.js";import"./index-DZq52GAk.js";import"./index-CzfBY83M.js";import"./types-BdVZogP6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-FU13a2Gq.js";import"./throttle-DnOef0ju.js";import"./index-C-_IQ3AX.js";import"./index-ypDDL202.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-D79DWiWx.js";import"./RechartsWrapper-Ckb52kl2.js";import"./index-CvqQYFRa.js";import"./CartesianChart-DZEnNXBj.js";import"./chartDataContext-BtLlHBCM.js";import"./CategoricalChart-CAmdUyZx.js";import"./Curve-CdVM2yHm.js";import"./step-CX_rIxxT.js";import"./path-DyVhHtw_.js";import"./activeStyles-D2vPCQTd.js";import"./useAnimationId-DPppjou0.js";import"./dataEntryStyles-CrSg03Wv.js";import"./ActivePoints-CPY1nzmN.js";import"./Dot-C0cfWCUu.js";import"./ErrorBarContext-4DLGaDei.js";import"./GraphicalItemClipPath-Dm-UOdIc.js";import"./SetGraphicalItem-BKY1gJK1.js";import"./getRadiusAndStrokeWidthFromDot-CkoSzgY_.js";import"./ActiveShapeUtils-tgtgWXQ1.js";import"./useEffectiveDataKey-Tusm1QhA.js";import"./useElementOffset-CNPJvaJQ.js";import"./uniqBy-BbsWZnIf.js";import"./iteratee-aih5jQ4Q.js";import"./Cross-2f4ua_UC.js";import"./Rectangle-iHdnnD4v.js";import"./util-Dxo8gN5i.js";import"./Sector-CHux40iq.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
