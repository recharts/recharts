import{R as e}from"./iframe-CpWBjTvp.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-WebSLI5n.js";import{R as h}from"./zIndexSlice-DUDjamRK.js";import{C as g}from"./ComposedChart-BVHJhCwJ.js";import{L as x}from"./Line-P1M0af3R.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-9EE4QQRc.js";import{T as V}from"./Tooltip-pr3HU5Xv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CgwFl8Jq.js";import"./Layer-DcRKRX6x.js";import"./resolveDefaultProps-NIjw2OgC.js";import"./Text-BafsCBcm.js";import"./pageBackground-CKOzv8y-.js";import"./ZIndexLayer-BbGGEaTO.js";import"./index-BsKHwb8S.js";import"./index-BEj8e0rp.js";import"./Label-BHRweOLu.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cbbt3MrT.js";import"./throttle-D3Uoll6g.js";import"./types-BKpcX7F2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DvLiRaDl.js";import"./index-BKdflUfl.js";import"./index-mAc_XfwU.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DP-Cq8x3.js";import"./RechartsWrapper-DxDmVade.js";import"./index-xtKZJIPQ.js";import"./CartesianChart-2SX8QMEH.js";import"./ZIndexPortal-D23JLhQd.js";import"./CategoricalChart-tOUFzxMq.js";import"./Curve-DzwEiiyx.js";import"./step-D2PoiFak.js";import"./path-DyVhHtw_.js";import"./LabelList-B0vE2GKD.js";import"./ActivePoints-CWRCwq-4.js";import"./Dot-D1fFPcbO.js";import"./activeStyles-CPrr7d0w.js";import"./useAnimationId-qe3YUtTg.js";import"./dataEntryStyles-BMyxGDVI.js";import"./Symbols-D-1GfXlL.js";import"./symbol-C1ODNnyl.js";import"./ErrorBarContext-Bmj1TjNN.js";import"./SetGraphicalItem-Bf14-AlA.js";import"./getRadiusAndStrokeWidthFromDot-BkVlgOSF.js";import"./ActiveShapeUtils-DpSDZTd0.js";import"./useEffectiveDataKey-CmhiZ1Bu.js";import"./useElementOffset-BB9lz8UY.js";import"./uniqBy-BEMNrNmR.js";import"./iteratee-NM3yHH-L.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CJ1zLrh7.js";import"./Rectangle-DrAVfzV4.js";import"./util-Dxo8gN5i.js";import"./Sector-cqrvmsip.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
